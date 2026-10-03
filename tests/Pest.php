<?php

use Saade\FilamentFullCalendar\Tests\Fixtures\User;
use Saade\FilamentFullCalendar\Tests\TestCase;

uses(TestCase::class)
    ->beforeEach(fn () => $this->actingAs(User::create(['name' => 'Admin', 'email' => 'admin@example.com'])))
    ->in('Feature');
