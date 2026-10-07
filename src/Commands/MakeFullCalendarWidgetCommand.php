<?php

namespace Saade\FilamentFullCalendar\Commands;

use Filament\Support\Commands\Concerns\CanReadModelSchemas;
use Filament\Support\Commands\Exceptions\FailureCommandOutput;

use function Filament\Support\discover_app_classes;

use Filament\Widgets\Commands\MakeWidgetCommand;
use Illuminate\Database\Eloquent\Model;

use function Laravel\Prompts\suggest;
use function Laravel\Prompts\text;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputOption;
use Throwable;

#[AsCommand(name: 'make:filament-fullcalendar-widget', aliases: [
    'filament-fullcalendar:make-widget',
    'filament-fullcalendar:widget',
])]
class MakeFullCalendarWidgetCommand extends MakeWidgetCommand
{
    use CanReadModelSchemas;

    protected $description = 'Create a new calendar widget class';

    protected $name = 'make:filament-fullcalendar-widget';

    /**
     * @var array<string>
     */
    protected $aliases = [
        'filament-fullcalendar:make-widget',
        'filament-fullcalendar:widget',
    ];

    /**
     * @var ?class-string<Model>
     */
    protected ?string $modelFqn = null;

    /**
     * @var array<string, string> The type of each column of the model's table, by name.
     */
    protected array $columns = [];

    /**
     * @return array<InputOption>
     */
    protected function getOptions(): array
    {
        return [
            ...array_filter(
                parent::getOptions(),
                fn (InputOption $option): bool => in_array($option->getName(), ['cluster', 'panel', 'resource', 'resource-namespace', 'force']),
            ),
            new InputOption(
                name: 'model',
                shortcut: 'M',
                mode: InputOption::VALUE_REQUIRED,
                description: 'The model whose records are the events, such as [' . app()->getNamespace() . 'Models\\Event]',
            ),
            new InputOption(
                name: 'title',
                shortcut: null,
                mode: InputOption::VALUE_REQUIRED,
                description: 'The attribute of the model that is the title of an event',
            ),
            new InputOption(
                name: 'start',
                shortcut: null,
                mode: InputOption::VALUE_REQUIRED,
                description: 'The attribute of the model that holds the start of an event',
            ),
            new InputOption(
                name: 'end',
                shortcut: null,
                mode: InputOption::VALUE_REQUIRED,
                description: 'The attribute of the model that holds the end of an event',
            ),
        ];
    }

    public function handle(): int
    {
        try {
            $this->configureFqnEnd();
            $this->configurePanel(
                question: 'Which panel would you like to create this widget in?',
                initialQuestion: 'Would you like to create this widget in a panel?',
            );
            $this->configureHasResource();
            $this->configureCluster();
            $this->configureResource();
            $this->configureWidgetsLocation();

            $this->fqn = $this->widgetsNamespace . '\\' . $this->fqnEnd;

            $this->configureModel();
            $this->createCalendarWidget();
        } catch (FailureCommandOutput) {
            return static::FAILURE;
        }

        $this->components->info("Calendar widget [{$this->fqn}] created successfully.");

        if (filled($this->resourceFqn)) {
            $this->components->info("Make sure to register the widget in [{$this->resourceFqn}::getWidgets()], and add it to a page in the resource.");
        } elseif ($this->panel && empty($this->panel->getWidgetNamespaces())) {
            $this->components->info('Make sure to register the widget with [widgets()] or discover it with [discoverWidgets()] in the panel service provider.');
        }

        $this->components->info('Make sure the theme of the panel imports the stylesheet of the calendar, as described in the installation instructions.');

        return static::SUCCESS;
    }

    protected function configureFqnEnd(): void
    {
        $this->fqnEnd = (string) str($this->argument('name') ?? text(
            label: 'What is the widget name?',
            placeholder: 'CalendarWidget',
            required: true,
        ))
            ->trim('/')
            ->trim('\\')
            ->trim(' ')
            ->studly()
            ->replace('/', '\\');
    }

    protected function configureModel(): void
    {
        $model = $this->option('model');

        if (blank($model) && filled($this->resourceFqn)) {
            $model = $this->resourceFqn::getModel();
        }

        if (blank($model)) {
            $modelFqns = discover_app_classes(parentClass: Model::class);

            $model = suggest(
                label: 'What is the model of the events?',
                options: function (string $search) use ($modelFqns): array {
                    $search = str($search)->trim()->replace(['\\', '/'], '');

                    if (blank($search)) {
                        return $modelFqns;
                    }

                    return array_filter(
                        $modelFqns,
                        fn (string $class): bool => str($class)->replace(['\\', '/'], '')->contains($search, ignoreCase: true),
                    );
                },
                placeholder: app()->getNamespace() . 'Models\\Event',
                hint: 'Leave this empty for a calendar that is not backed by a model.',
            );
        }

        if (blank($model)) {
            return;
        }

        $model = (string) str($model)->trim('/')->trim('\\')->trim(' ')->replace('/', '\\');
        $rootNamespace = app()->getNamespace();

        $this->modelFqn = (class_exists($model) || str_starts_with($model, $rootNamespace))
            ? $model
            : "{$rootNamespace}Models\\{$model}";

        try {
            $this->columns = collect($this->getModelSchema($this->modelFqn)->getColumns($this->getModelTable($this->modelFqn)))
                ->mapWithKeys(fn (array $column): array => [$column['name'] => $column['type_name']])
                ->all();
        } catch (Throwable) {
            $this->columns = [];
        }
    }

    protected function createCalendarWidget(): void
    {
        $path = (string) str("{$this->widgetsDirectory}\\{$this->fqnEnd}.php")
            ->replace('\\', '/')
            ->replace('//', '/');

        if ((! $this->option('force')) && $this->checkForCollision($path)) {
            throw new FailureCommandOutput();
        }

        $replacements = [
            '{{ namespace }}' => (string) str($this->fqn)->beforeLast('\\'),
            '{{ class }}' => class_basename($this->fqn),
        ];

        if (blank($this->modelFqn)) {
            $this->writeFile($path, strtr(file_get_contents(__DIR__ . '/../../stubs/widget.stub'), $replacements));

            return;
        }

        $dateColumns = array_keys(array_filter($this->columns, $this->isDateType(...)));
        $eventDateColumns = array_values(array_diff($dateColumns, ['created_at', 'updated_at', 'deleted_at', 'email_verified_at']));

        $title = $this->askForAttribute(
            option: 'title',
            question: 'Which attribute is the title of an event?',
            candidates: ['title', 'name', 'subject', 'label', ...$this->getTextColumns()],
            columns: array_keys($this->columns),
            fallback: 'title',
        );

        $start = $this->askForAttribute(
            option: 'start',
            question: 'Which attribute holds the start of an event?',
            candidates: ['starts_at', 'start_at', 'started_at', 'start_date', 'start', 'begins_at', 'scheduled_at', 'date', ...$eventDateColumns],
            columns: $dateColumns,
            fallback: 'starts_at',
        );

        $end = $this->askForAttribute(
            option: 'end',
            question: 'Which attribute holds the end of an event?',
            candidates: ['ends_at', 'end_at', 'ended_at', 'end_date', 'end', 'finishes_at', 'due_at', 'due_date', ...array_diff($eventDateColumns, [$start])],
            columns: $dateColumns,
            fallback: 'ends_at',
        );

        $isAllDay = $this->hasDateOnly($start) && $this->hasDateOnly($end);

        $components = array_unique([
            $this->hasDateOnly($start) ? 'DatePicker' : 'DateTimePicker',
            $this->hasDateOnly($end) ? 'DatePicker' : 'DateTimePicker',
            'TextInput',
        ]);

        sort($components);

        $this->writeFile($path, strtr(file_get_contents(__DIR__ . '/../../stubs/widget.model.stub'), [
            ...$replacements,
            '{{ modelClass }}' => $this->modelFqn,
            '{{ model }}' => class_basename($this->modelFqn),
            '{{ title }}' => $title,
            '{{ titleValue }}' => $this->isTextType($this->columns[$title] ?? 'varchar') ? "\$record->{$title}" : "(string) \$record->{$title}",
            '{{ start }}' => $start,
            '{{ end }}' => $end,
            '{{ componentImports }}' => implode("\n", array_map(fn (string $component): string => "use Filament\\Forms\\Components\\{$component};", $components)),
            '{{ startComponent }}' => $this->hasDateOnly($start) ? 'DatePicker' : 'DateTimePicker',
            '{{ endComponent }}' => $this->hasDateOnly($end) ? 'DatePicker' : 'DateTimePicker',
            '{{ dates }}' => $isAllDay
                ? implode("\n", [
                    "                ->start(\$record->{$start}->toDateString())",
                    '                // FullCalendar treats the end of an all-day event as exclusive.',
                    "                ->end(\$record->{$end}->copy()->addDay()->toDateString())",
                    '                ->allDay()',
                ])
                : implode("\n", [
                    "                ->start(\$record->{$start})",
                    "                ->end(\$record->{$end})",
                ]),
        ]));
    }

    /**
     * @param  array<string>  $candidates  Names to prefer, most likely first.
     * @param  array<string>  $columns  The columns to choose from.
     */
    protected function askForAttribute(string $option, string $question, array $candidates, array $columns, string $fallback): string
    {
        if (filled($this->option($option))) {
            return $this->option($option);
        }

        $default = collect($candidates)->first(fn (string $candidate): bool => array_key_exists($candidate, $this->columns)) ?? $fallback;

        return suggest(
            label: $question,
            options: $columns,
            default: $default,
            required: true,
        );
    }

    /**
     * Columns the model casts, such as to an enum, are left out.
     *
     * @return array<string>
     */
    protected function getTextColumns(): array
    {
        if (! $this->columns) {
            return [];
        }

        $casts = app($this->modelFqn)->getCasts();

        return array_keys(array_filter(
            $this->columns,
            fn (string $type, string $column): bool => $this->isTextType($type) && (! array_key_exists($column, $casts)),
            ARRAY_FILTER_USE_BOTH,
        ));
    }

    protected function isTextType(string $type): bool
    {
        return in_array(strtolower($type), ['char', 'varchar', 'string', 'text', 'tinytext', 'mediumtext', 'longtext', 'bpchar'], strict: true);
    }

    protected function isDateType(string $type): bool
    {
        return in_array(strtolower($type), ['date', 'datetime', 'datetimetz', 'timestamp', 'timestamptz'], strict: true);
    }

    protected function hasDateOnly(string $attribute): bool
    {
        return strtolower($this->columns[$attribute] ?? '') === 'date';
    }
}
