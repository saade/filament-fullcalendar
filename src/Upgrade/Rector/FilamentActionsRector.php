<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use PhpParser\Node;
use PhpParser\Node\Arg;
use PhpParser\Node\ArrayItem;
use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Expr\ArrowFunction;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\StaticCall;
use PhpParser\Node\Expr\Variable;
use PhpParser\Node\Identifier;
use PhpParser\Node\Param;
use PhpParser\Node\Stmt\Class_;

class FilamentActionsRector extends AbstractWidgetRector
{
    protected function refactorWidget(Class_ $class): bool
    {
        $hasChanged = false;

        $this->traverseNodesWithCallable($class->stmts, function (Node $node) use (&$hasChanged): ?Node {
            if ((! $node instanceof StaticCall) || (! $this->isName($node->name, 'make'))) {
                return null;
            }

            $action = static::RENAMED_CLASSES[$this->getName($node->class) ?? ''] ?? null;

            if (! $action) {
                return null;
            }

            $hasChanged = true;

            $node->class = $this->importName($action);

            // What the package's own classes did in `setUp()`, so the calendar
            // keeps behaving as it did.
            return match ($action) {
                EditAction::class, DeleteAction::class => new MethodCall($node, 'cancelParentActions'),
                ViewAction::class => new MethodCall(
                    new MethodCall($node, 'modalFooterActions', [new Arg($this->makeViewModalFooterActions())]),
                    'cancelParentActions',
                ),
                default => $node,
            };
        });

        return $hasChanged;
    }

    protected function makeViewModalFooterActions(): ArrowFunction
    {
        return new ArrowFunction([
            'params' => [new Param(new Variable('action'), type: $this->importName(ViewAction::class))],
            'returnType' => new Identifier('array'),
            'expr' => new Array_([
                new ArrayItem(new MethodCall(new Variable('this'), 'getCachedFormActions'), unpack: true),
                new ArrayItem(new MethodCall(new Variable('action'), 'getModalCancelAction')),
            ]),
        ]);
    }
}
