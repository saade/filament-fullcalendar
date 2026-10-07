<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use Filament\Actions\CreateAction;
use PhpParser\Modifiers;
use PhpParser\Node\ArrayItem;
use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Expr\StaticCall;
use PhpParser\Node\Identifier;
use PhpParser\Node\Stmt\Class_;
use PhpParser\Node\Stmt\ClassMethod;
use PhpParser\Node\Stmt\Return_;
use PHPStan\Reflection\ClassReflection;
use Rector\PHPStan\ScopeFetcher;

/**
 * 4.x showed a create button unless a widget said otherwise, and 5.x shows
 * none. This gives the button back to the widgets that relied on it.
 */
class KeepCreateButtonRector extends AbstractWidgetRector
{
    protected function refactorWidget(Class_ $class): bool
    {
        if ($class->isAbstract() || $class->isAnonymous()) {
            return false;
        }

        $reflection = ScopeFetcher::fetch($class)->getClassReflection();

        if (! $reflection instanceof ClassReflection) {
            return false;
        }

        foreach (['headerActions', 'getHeaderActions'] as $method) {
            if ($class->getMethod($method)) {
                return false;
            }

            // A base widget of the application may already decide this.
            if ($reflection->hasNativeMethod($method) && (! str_starts_with($reflection->getNativeMethod($method)->getDeclaringClass()->getName(), 'Saade\\FilamentFullCalendar\\'))) {
                return false;
            }
        }

        $class->stmts[] = new ClassMethod('headerActions', [
            'flags' => Modifiers::PROTECTED,
            'returnType' => new Identifier('array'),
            'stmts' => [
                new Return_(new Array_([
                    new ArrayItem(new StaticCall($this->importName(CreateAction::class), 'make')),
                ])),
            ],
        ]);

        return true;
    }
}
