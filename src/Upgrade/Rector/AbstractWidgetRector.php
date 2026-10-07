<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use PhpParser\Node;
use PhpParser\Node\Name;
use PhpParser\Node\Name\FullyQualified;
use PhpParser\Node\Stmt\Class_;
use PHPStan\Type\ObjectType;
use Rector\Naming\Naming\UseImportsResolver;
use Rector\Rector\AbstractRector;
use Rector\StaticTypeMapper\ValueObject\Type\FullyQualifiedObjectType;
use Saade\FilamentFullCalendar\Widgets\FullCalendarWidget;
use Symplify\RuleDocGenerator\ValueObject\RuleDefinition;

abstract class AbstractWidgetRector extends AbstractRector
{
    /**
     * The package's own action classes, which the upgrade renames to
     * Filament's wherever they are imported.
     */
    protected const RENAMED_CLASSES = [
        'Saade\\FilamentFullCalendar\\Actions\\CreateAction' => 'Filament\\Actions\\CreateAction',
        'Saade\\FilamentFullCalendar\\Actions\\EditAction' => 'Filament\\Actions\\EditAction',
        'Saade\\FilamentFullCalendar\\Actions\\DeleteAction' => 'Filament\\Actions\\DeleteAction',
        'Saade\\FilamentFullCalendar\\Actions\\ViewAction' => 'Filament\\Actions\\ViewAction',
    ];

    public function __construct(
        protected readonly UseImportsResolver $useImportsResolver,
    ) {}

    public function getRuleDefinition(): RuleDefinition
    {
        return new RuleDefinition(static::class, []);
    }

    /**
     * @return array<class-string<Node>>
     */
    public function getNodeTypes(): array
    {
        return [Class_::class];
    }

    /**
     * @param  Class_  $node
     */
    public function refactor(Node $node): ?Node
    {
        if (! $this->isObjectType($node, new ObjectType(FullCalendarWidget::class))) {
            return null;
        }

        return $this->refactorWidget($node) ? $node : null;
    }

    /**
     * The name to write for a class: its short name, imported in this file
     * only, or the full name when the short one is taken by something else.
     * Rector's own option to import names would rewrite every file it reads.
     */
    protected function importName(string $class): Name
    {
        $shortName = substr((string) strrchr('\\' . $class, '\\'), 1);

        foreach ($this->useImportsResolver->resolve() as $use) {
            $prefix = $this->useImportsResolver->resolvePrefix($use);

            foreach ($use->uses as $useItem) {
                if ($useItem->getAlias()->toString() !== $shortName) {
                    continue;
                }

                $imported = $prefix . $useItem->name->toString();

                if ($imported === $class) {
                    return new Name($shortName);
                }

                if ((static::RENAMED_CLASSES[$imported] ?? null) !== $class) {
                    return new FullyQualified($class);
                }

                // The import of the class this one replaces becomes its import.
                $useItem->name = new Name(ltrim(substr($class, strlen($prefix)), '\\'));

                return new Name($shortName);
            }
        }

        $fileNode = $this->getFile()->getFileNode();

        if (! $fileNode) {
            return new FullyQualified($class);
        }

        $fileNode->getPendingImports()->addUseImport(new FullyQualifiedObjectType($class));

        return new Name($shortName);
    }

    /**
     * @return bool Whether the class was changed.
     */
    abstract protected function refactorWidget(Class_ $class): bool;
}
