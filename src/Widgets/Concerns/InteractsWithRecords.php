<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Filament\Facades\Filament;

use function Filament\Support\get_model_label;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Livewire\Attributes\Locked;

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
            throw (new ModelNotFoundException())->setModel($this->getModel(), [$key]);
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
        $query = app($this->getModel())::query();

        if (static::$isScopedToTenant && ($tenant = Filament::getTenant())) {
            $this->scopeEloquentQueryToTenant($query, $tenant);
        }

        return $query;
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

    protected function getModelLabel(): string
    {
        return $this->modelLabel ?? get_model_label($this->getModel());
    }
}
