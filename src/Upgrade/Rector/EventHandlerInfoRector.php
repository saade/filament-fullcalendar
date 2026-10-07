<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use PhpParser\Modifiers;
use PhpParser\Node;
use PhpParser\Node\Expr\Assign;
use PhpParser\Node\Expr\PropertyFetch;
use PhpParser\Node\Expr\Variable;
use PhpParser\Node\Param;
use PhpParser\Node\Stmt\Class_;
use PhpParser\Node\Stmt\Expression;
use Saade\FilamentFullCalendar\Data\DateSelectInfo;
use Saade\FilamentFullCalendar\Data\EventClickInfo;
use Saade\FilamentFullCalendar\Data\EventDropInfo;
use Saade\FilamentFullCalendar\Data\EventResizeInfo;

class EventHandlerInfoRector extends AbstractWidgetRector
{
    /**
     * The info class of each handler, and the properties that took the place
     * of its arguments, in the order of those arguments.
     */
    protected const HANDLERS = [
        'onEventClick' => [EventClickInfo::class, ['event']],
        'onEventDrop' => [EventDropInfo::class, ['event', 'oldEvent', 'relatedEvents', 'delta', 'oldResource', 'newResource']],
        'onEventResize' => [EventResizeInfo::class, ['event', 'oldEvent', 'relatedEvents', 'startDelta', 'endDelta']],
        'onDateSelect' => [DateSelectInfo::class, ['start', 'end', 'allDay', 'view', 'resource']],
    ];

    protected function refactorWidget(Class_ $class): bool
    {
        $hasChanged = false;

        foreach (static::HANDLERS as $name => [$infoClass, $properties]) {
            $method = $class->getMethod($name);

            if ((! $method) || ($method->stmts === null)) {
                continue;
            }

            $firstType = $method->params[0]->type ?? null;

            if ($firstType && $this->isName($firstType, $infoClass)) {
                continue;
            }

            $usedVariables = [];

            $this->traverseNodesWithCallable($method->stmts, function (Node $node) use (&$usedVariables): null {
                if ($node instanceof Variable && is_string($node->name)) {
                    $usedVariables[$node->name] = true;
                }

                return null;
            });

            // The arguments become local variables read from the info object,
            // so the body keeps working whatever it does with them.
            $assignments = [];

            foreach ($method->params as $index => $param) {
                $variable = $this->getName($param->var);
                $property = $properties[$index] ?? null;

                if (($variable === null) || ($property === null) || (! isset($usedVariables[$variable]))) {
                    continue;
                }

                $assignments[] = new Expression(new Assign(
                    new Variable($variable),
                    new PropertyFetch(new Variable('info'), $property),
                ));
            }

            $method->params = [new Param(new Variable('info'), type: $this->importName($infoClass))];
            $method->stmts = [...$assignments, ...$method->stmts];
            $method->flags = ($method->flags & ~Modifiers::VISIBILITY_MASK) | Modifiers::PROTECTED;

            $hasChanged = true;
        }

        return $hasChanged;
    }
}
