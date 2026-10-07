<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use PhpParser\Node;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Scalar\String_;
use Rector\Rector\AbstractRector;
use Symplify\RuleDocGenerator\ValueObject\RuleDefinition;

/**
 * Tests that call the widget through Livewire, as in `->call('onEventClick')`,
 * have to call the methods the browser calls now.
 */
class HandleMethodCallRector extends AbstractRector
{
    protected const METHODS = [
        'fetchEvents' => 'handleFetchEvents',
        'onEventClick' => 'handleEventClick',
        'onEventDrop' => 'handleEventDrop',
        'onEventResize' => 'handleEventResize',
        'onDateSelect' => 'handleDateSelect',
    ];

    public function getRuleDefinition(): RuleDefinition
    {
        return new RuleDefinition(static::class, []);
    }

    /**
     * @return array<class-string<Node>>
     */
    public function getNodeTypes(): array
    {
        return [MethodCall::class];
    }

    /**
     * @param  MethodCall  $node
     */
    public function refactor(Node $node): ?Node
    {
        if ((! $this->isName($node->name, 'call')) || $node->isFirstClassCallable()) {
            return null;
        }

        $method = $node->getArgs()[0]->value ?? null;

        if ((! $method instanceof String_) || (! isset(static::METHODS[$method->value]))) {
            return null;
        }

        $method->value = static::METHODS[$method->value];

        return $node;
    }
}
