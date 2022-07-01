<?php

namespace Saade\FilamentFullCalendar\Widgets\Concerns;

use Closure;

trait EvaluateClosures
{
    public function evaluate($value, array $parameters = [], array $exceptParameters = [])
    {
        if ($value instanceof Closure) {
            return app()->call(
                $value,
                array_merge(
                    $this->getDefaultEvaluationParameters(),
                    $parameters,
                ),
            );
        }

        return $value;
    }

    protected function getDefaultEvaluationParameters(): array
    {
        return [
            'calendar' => $this,
        ];
    }
}
