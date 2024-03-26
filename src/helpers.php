<?php

namespace Saade\FilamentFullCalendar;

if(! function_exists('Saade\FilamentFullCalendar\array_merge_recursive_unique')) {
    function array_merge_recursive_unique(array $array1, array $array2): array
    {
        foreach ($array2 as $key => $value) {
            if (is_array($value) && isset($array1[$key]) && is_array($array1[$key])) {
                $array1[$key] = array_merge_recursive_unique($array1[$key], $value);
            } else {
                $array1[$key] = $value;
            }
        }

        return $array1;
    }
}
