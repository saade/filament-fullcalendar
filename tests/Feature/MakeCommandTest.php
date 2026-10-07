<?php

use Illuminate\Support\Facades\File;
use Saade\FilamentFullCalendar\Tests\Fixtures\Event;
use Saade\FilamentFullCalendar\Tests\Fixtures\TaskResource;

function removeGeneratedWidgets(): void
{
    File::deleteDirectory(app_path('Filament/Widgets'));
    File::deleteDirectory(dirname((new ReflectionClass(TaskResource::class))->getFileName()) . '/TaskResource');
}

beforeEach(fn () => removeGeneratedWidgets());
afterEach(fn () => removeGeneratedWidgets());

const MODEL_QUESTION = 'What is the model of the events?';
const TITLE_QUESTION = 'Which attribute is the title of an event?';
const START_QUESTION = 'Which attribute holds the start of an event?';
const END_QUESTION = 'Which attribute holds the end of an event?';

/**
 * @param  array<string, string>  $answers  What is typed at each question the options leave open.
 */
function makeCalendarWidget(array $arguments, array $answers = []): string
{
    $command = test()->artisan('make:filament-fullcalendar-widget', [...$arguments, '--panel' => 'admin'])
        ->expectsConfirmation('Would you like to create this widget in a resource?', 'no');

    foreach ($answers as $question => $answer) {
        $command->expectsQuestion($question, $answer);
    }

    $command->assertSuccessful()->run();

    $path = app_path('Filament/Widgets/' . str_replace('\\', '/', $arguments['name']) . '.php');

    expect(shell_exec('php -l ' . escapeshellarg($path)))->toContain('No syntax errors');

    return File::get($path);
}

it('creates a calendar widget for a model, from the options', function () {
    $widget = makeCalendarWidget([
        'name' => 'BookingCalendarWidget',
        '--model' => 'Booking',
        '--title' => 'name',
        '--start' => 'check_in',
        '--end' => 'check_out',
    ]);

    expect($widget)
        ->toContain('namespace App\Filament\Widgets;')
        ->toContain('use App\Models\Booking;')
        ->toContain('class BookingCalendarWidget extends FullCalendarWidget')
        ->toContain('public Model | string | null $model = Booking::class;')
        ->toContain("protected ?string \$startAttribute = 'check_in';")
        ->toContain("\$info->overlapping(Booking::query(), 'check_in', 'check_out')")
        ->toContain('->title($record->name)')
        ->toContain('->start($record->check_in)')
        ->toContain("DateTimePicker::make('check_out')")
        ->not->toContain('{{');
});

it('guesses the attributes from the columns of the model', function () {
    $widget = makeCalendarWidget(['name' => 'EventCalendar'], [
        MODEL_QUESTION => Event::class,
        TITLE_QUESTION => 'title',
        START_QUESTION => 'starts_at',
        END_QUESTION => 'ends_at',
    ]);

    expect($widget)
        ->toContain('use Saade\FilamentFullCalendar\Tests\Fixtures\Event;')
        ->toContain("\$info->overlapping(Event::query(), 'starts_at', 'ends_at')")
        ->toContain('->title($record->title)');
});

it('finds the model in a subdirectory of the models, or by its full name', function (string $model, string $import, string $short) {
    expect(makeCalendarWidget(['name' => 'CalendarWidget', '--model' => $model, '--title' => 'name', '--start' => 'starts_at', '--end' => 'ends_at']))
        ->toContain("use {$import};")
        ->toContain("\$model = {$short}::class;");
})->with([
    ['Projects\\Task', 'App\\Models\\Projects\\Task', 'Task'],
    ['Projects/Task', 'App\\Models\\Projects\\Task', 'Task'],
    ['App\\Domain\\Booking', 'App\\Domain\\Booking', 'Booking'],
]);

it('creates a calendar widget without a model, in a subdirectory', function () {
    expect(makeCalendarWidget(['name' => 'Planning/HolidayCalendar'], [MODEL_QUESTION => '']))
        ->toContain('namespace App\Filament\Widgets\Planning;')
        ->toContain('class HolidayCalendar extends FullCalendarWidget')
        ->not->toContain('$model')
        ->not->toContain('{{');
});

it('creates the widget in a resource, for the model of the resource', function () {
    $this->artisan('make:filament-fullcalendar-widget', [
        'name' => 'TaskCalendar',
        '--panel' => 'admin',
        '--resource' => TaskResource::class,
        '--title' => 'name',
        '--start' => 'due_at',
        '--end' => 'due_at',
    ])
        ->expectsOutputToContain('TaskResource::getWidgets()')
        ->assertSuccessful();

    $path = dirname((new ReflectionClass(TaskResource::class))->getFileName()) . '/TaskResource/Widgets/TaskCalendar.php';

    expect(File::get($path))
        ->toContain('namespace Saade\FilamentFullCalendar\Tests\Fixtures\TaskResource\Widgets;')
        ->toContain('use Saade\FilamentFullCalendar\Tests\Fixtures\Task;')
        ->toContain('public Model | string | null $model = Task::class;');
});

it('has the options of the Filament widget command that apply to a calendar', function () {
    $options = array_keys($this->app[Illuminate\Contracts\Console\Kernel::class]->all()['make:filament-fullcalendar-widget']->getDefinition()->getOptions());

    expect($options)
        ->toContain('panel', 'resource', 'resource-namespace', 'cluster', 'force', 'model', 'title', 'start', 'end')
        ->not->toContain('chart', 'stats-overview', 'table');
});
