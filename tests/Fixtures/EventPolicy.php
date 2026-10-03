<?php

namespace Saade\FilamentFullCalendar\Tests\Fixtures;

class EventPolicy
{
    public static bool $allows = true;

    public function view(User $user, Event $event): bool
    {
        return static::$allows;
    }

    public function create(User $user): bool
    {
        return static::$allows;
    }

    public function update(User $user, Event $event): bool
    {
        return static::$allows;
    }

    public function delete(User $user, Event $event): bool
    {
        return static::$allows;
    }
}
