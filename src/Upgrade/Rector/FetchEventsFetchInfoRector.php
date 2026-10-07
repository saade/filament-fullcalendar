<?php

namespace Saade\FilamentFullCalendar\Upgrade\Rector;

use PhpParser\Node\Stmt\Class_;
use Saade\FilamentFullCalendar\Data\FetchInfo;

class FetchEventsFetchInfoRector extends AbstractWidgetRector
{
    protected function refactorWidget(Class_ $class): bool
    {
        $param = $class->getMethod('fetchEvents')?->params[0] ?? null;

        if ((! $param) || (! $param->type) || (! $this->isName($param->type, 'array'))) {
            return false;
        }

        $param->type = $this->importName(FetchInfo::class);

        return true;
    }
}
