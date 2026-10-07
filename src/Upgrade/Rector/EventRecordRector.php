<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use PhpParser\Node;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\PropertyFetch;
use PhpParser\Node\Expr\StaticPropertyFetch;
use PhpParser\Node\Expr\Variable;
use PhpParser\Node\Identifier;
use PhpParser\Node\Stmt\Class_;
use PhpParser\Node\Stmt\ClassMethod;
use PhpParser\Node\Stmt\Property;
use PhpParser\Node\VarLikeIdentifier;

class EventRecordRector extends AbstractWidgetRector
{
    protected const METHODS = [
        'getRecord' => 'getEventRecord',
        'resolveRecord' => 'resolveEventRecord',
        'resolveRecordRouteBinding' => 'resolveEventRecordRouteBinding',
        'getRecordRouteKeyName' => 'getEventRecordRouteKeyName',
    ];

    protected function refactorWidget(Class_ $class): bool
    {
        // A widget that declares `$record` itself keeps it: that is the
        // record of the page it sits on, which 5.x leaves alone.
        $declaresRecord = $class->getProperty('record') !== null;

        $hasChanged = false;

        $this->traverseNodesWithCallable($class->stmts, function (Node $node) use ($declaresRecord, &$hasChanged): null {
            if ($node instanceof ClassMethod && ($name = static::METHODS[$this->getName($node)] ?? null)) {
                $node->name = new Identifier($name);
                $hasChanged = true;
            }

            if ($node instanceof Property && $this->isName($node->props[0], 'recordRouteKeyName')) {
                $node->props[0]->name = new VarLikeIdentifier('eventRecordRouteKeyName');
                $hasChanged = true;
            }

            if ($node instanceof StaticPropertyFetch && $this->isName($node->name, 'recordRouteKeyName')) {
                $node->name = new VarLikeIdentifier('eventRecordRouteKeyName');
                $hasChanged = true;
            }

            if ((! $node instanceof MethodCall) && (! $node instanceof PropertyFetch)) {
                return null;
            }

            if ((! $node->var instanceof Variable) || (! $this->isName($node->var, 'this'))) {
                return null;
            }

            if ($node instanceof MethodCall && ($name = static::METHODS[$this->getName($node->name)] ?? null)) {
                $node->name = new Identifier($name);
                $hasChanged = true;
            }

            if ($node instanceof PropertyFetch && (! $declaresRecord) && $this->isName($node->name, 'record')) {
                $node->name = new Identifier('eventRecord');
                $hasChanged = true;
            }

            return null;
        });

        return $hasChanged;
    }
}
