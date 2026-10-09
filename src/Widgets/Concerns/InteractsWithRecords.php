<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Facades\Filament;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\Relations\Relation;
use Livewire\Attributes\Locked;
use Saade\FilamentFullCalendar\Contracts\Eventable;
use Saade\FilamentFullCalendar\Contracts\Eventables;

use function Filament\Support\get_model_label;

trait InteractsWithRecords
{
    #[Locked]
    public Model | string | null $model = null;

    protected ?string $modelLabel = null;

    #[Locked]
    public ?Model $eventRecord = null;

    protected static ?string $eventRecordRouteKeyName = null;

    protected static bool $isScopedToTenant = true;

    protected static ?string $tenantOwnershipRelationshipName = null;

    protected function resolveEventRecord(int | string $key): Model
    {
        $record = $this->resolveEventRecordRouteBinding($key);

        if ($record === null) {
            throw (new ModelNotFoundException)->setModel($this->getModel(), [$key]);
        }

        return $record;
    }

    public function getModel(): ?string
    {
        $model = $this->model;

        if ($model instanceof Model) {
            return $model::class;
        }

        if (filled($model)) {
            return $model;
        }

        return null;
    }

    public function getEventRecord(): ?Model
    {
        return $this->eventRecord;
    }

    public function resolveEventRecordRouteBinding(int | string $key): ?Model
    {
        return app($this->getModel())
            ->resolveRouteBindingQuery($this->getEloquentQuery(), $key, $this->getEventRecordRouteKeyName())
            ->first();
    }

    protected function getEloquentQuery(): Builder
    {
        return $this->newEventRecordQuery($this->getModel());
    }

    /**
     * The query used to look up a clicked event's record. The widget's own
     * model goes through `getEloquentQuery()`, so an override of it applies.
     *
     * @param  class-string<Model>  $model
     */
    protected function getEventRecordQuery(string $model): Builder
    {
        if ($model === $this->getModel()) {
            return $this->getEloquentQuery();
        }

        return $this->newEventRecordQuery($model);
    }

    /**
     * @param  class-string<Model>  $model
     */
    protected function newEventRecordQuery(string $model): Builder
    {
        $query = app($model)::query();

        if (static::$isScopedToTenant && ($tenant = Filament::getTenant())) {
            $this->scopeEloquentQueryToTenant($query, $tenant);
        }

        return $query;
    }

    /**
     * What an event carries so its record can be found again: the model, the
     * key, and a signature that stops the browser from asking for a record
     * the calendar never showed.
     *
     * @return array{model: string, key: int | string, signature: string}
     */
    protected function getEventRecordIdentity(Model $record): array
    {
        $model = $record->getMorphClass();
        $key = $record->getKey();

        return [
            'model' => $model,
            'key' => $key,
            'signature' => static::signEventRecordIdentity($model, $key),
        ];
    }

    protected static function signEventRecordIdentity(string $model, int | string $key): string
    {
        return hash_hmac('sha256', json_encode([static::class, $model, (string) $key]), config('app.key'));
    }

    /**
     * @param  array{model?: mixed, key?: mixed, signature?: mixed}  $identity
     */
    protected function resolveEventRecordFromIdentity(array $identity): Model
    {
        $model = $identity['model'] ?? null;
        $key = $identity['key'] ?? null;
        $signature = $identity['signature'] ?? null;

        abort_unless(
            is_string($model) && (is_string($key) || is_int($key)) && is_string($signature)
                && hash_equals(static::signEventRecordIdentity($model, $key), $signature),
            403,
        );

        /** @var class-string<Model> $modelClass */
        $modelClass = Relation::getMorphedModel($model) ?? $model;

        abort_unless(is_subclass_of($modelClass, Eventable::class) || is_subclass_of($modelClass, Eventables::class), 403);

        $record = app($modelClass)
            ->resolveRouteBindingQuery($this->getEventRecordQuery($modelClass), $key, app($modelClass)->getKeyName())
            ->first();

        if ($record === null) {
            throw (new ModelNotFoundException)->setModel($modelClass, [$key]);
        }

        return $record;
    }

    protected function scopeEloquentQueryToTenant(Builder $query, Model $tenant): Builder
    {
        if ($query->getModel()::class === $tenant::class) {
            return $query->whereKey($tenant);
        }

        $relationshipName = static::$tenantOwnershipRelationshipName ?? Filament::getTenantOwnershipRelationshipName();

        if (! $query->getModel()->isRelation($relationshipName)) {
            return $query;
        }

        return $query->whereHas(
            $relationshipName,
            fn (Builder $query) => $query->whereKey($tenant->getKey()),
        );
    }

    protected function getEventRecordRouteKeyName(): ?string
    {
        return static::$eventRecordRouteKeyName;
    }

    /**
     * @return ?class-string<Model>
     */
    public function getEventRecordModel(): ?string
    {
        return $this->getEventRecord() ? $this->getEventRecord()::class : null;
    }

    protected function getModelLabel(): string
    {
        return $this->modelLabel ?? get_model_label($this->getModel());
    }
}
