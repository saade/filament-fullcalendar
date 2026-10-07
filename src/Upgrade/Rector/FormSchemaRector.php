<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use Filament\Schemas\Schema;
use PhpParser\Modifiers;
use PhpParser\Node;
use PhpParser\Node\Arg;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\Variable;
use PhpParser\Node\FunctionLike;
use PhpParser\Node\Identifier;
use PhpParser\Node\Param;
use PhpParser\Node\Stmt\Class_;
use PhpParser\Node\Stmt\Return_;
use PhpParser\NodeVisitor;

class FormSchemaRector extends AbstractWidgetRector
{
    protected function refactorWidget(Class_ $class): bool
    {
        $method = $class->getMethod('getFormSchema');

        if ((! $method) || ($method->stmts === null) || $class->getMethod('form')) {
            return false;
        }

        $this->traverseNodesWithCallable($method->stmts, function (Node $node): ?int {
            if ($node instanceof FunctionLike) {
                return NodeVisitor::DONT_TRAVERSE_CURRENT_AND_CHILDREN;
            }

            if ($node instanceof Return_ && $node->expr) {
                $node->expr = new MethodCall(new Variable('schema'), 'components', [new Arg($node->expr)]);
            }

            return null;
        });

        $method->name = new Identifier('form');
        $method->params = [new Param(new Variable('schema'), type: $this->importName(Schema::class))];
        $method->returnType = $this->importName(Schema::class);
        $method->flags = ($method->flags & ~Modifiers::VISIBILITY_MASK) | Modifiers::PUBLIC;

        return true;
    }
}
