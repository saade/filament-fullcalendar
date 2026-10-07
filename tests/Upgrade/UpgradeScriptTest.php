<?php

use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Process\Process;

function upgradeFixtures(array $options = []): string
{
    $directory = sys_get_temp_dir() . '/filament-fullcalendar-upgrade-' . bin2hex(random_bytes(6));

    mkdir($directory);

    foreach (glob(__DIR__ . '/fixtures/before/*.stub') as $stub) {
        copy($stub, $directory . '/' . basename($stub, '.stub') . '.php');
    }

    $process = new Process(
        [PHP_BINARY, 'bin/filament-fullcalendar-v5', $directory, '--no-interaction', ...$options],
        dirname(__DIR__, 2),
        timeout: 300,
    );

    // A dry run that finds something to change exits with an error code.
    in_array('--dry-run', $options) ? $process->run() : $process->mustRun();

    return $directory;
}

afterEach(function () {
    foreach (glob(sys_get_temp_dir() . '/filament-fullcalendar-upgrade-*') as $directory) {
        (new Filesystem())->deleteDirectory($directory);
    }
});

it('upgrades a 4.x widget and its test, and leaves everything else alone', function () {
    $directory = upgradeFixtures(['--no-create-button']);

    foreach (glob(__DIR__ . '/fixtures/after/*.stub') as $expected) {
        expect(file_get_contents($directory . '/' . basename($expected, '.stub') . '.php'))->toBe(file_get_contents($expected));
    }

    foreach (['PageRecordCalendarWidget', 'NotAWidget', 'UnrelatedRoutes'] as $untouched) {
        expect(file_get_contents("{$directory}/{$untouched}.php"))->toBe(file_get_contents(__DIR__ . "/fixtures/before/{$untouched}.stub"));
    }
});

it('gives the create button back to the widgets that had it', function () {
    $directory = upgradeFixtures(['--keep-create-button']);

    expect(file_get_contents("{$directory}/MeetingCalendarWidget.php"))
        ->toContain('protected function headerActions(): array')
        ->toContain('return [CreateAction::make()];')
        ->toContain('use Filament\Actions\CreateAction;');

    expect(file_get_contents("{$directory}/PageRecordCalendarWidget.php"))
        ->toBe(file_get_contents(__DIR__ . '/fixtures/before/PageRecordCalendarWidget.stub'));
});

it('changes nothing on a dry run', function () {
    $directory = upgradeFixtures(['--no-create-button', '--dry-run']);

    expect(file_get_contents("{$directory}/MeetingCalendarWidget.php"))
        ->toBe(file_get_contents(__DIR__ . '/fixtures/before/MeetingCalendarWidget.stub'));
});

it('produces widgets that PHP can parse', function () {
    foreach (glob(upgradeFixtures(['--keep-create-button']) . '/*.php') as $file) {
        expect((new Process([PHP_BINARY, '-l', $file]))->run())->toBe(0);
    }
});

it('warns about views of the package that the application has published', function () {
    $project = sys_get_temp_dir() . '/filament-fullcalendar-upgrade-' . bin2hex(random_bytes(6));
    $script = dirname(__DIR__, 2) . '/bin/filament-fullcalendar-v5';

    mkdir("{$project}/app", recursive: true);

    $run = fn (): string => (new Process([PHP_BINARY, $script, 'app', '--no-interaction', '--no-create-button'], $project, timeout: 300))
        ->mustRun()
        ->getOutput();

    expect($run())->not->toContain('published views');

    mkdir("{$project}/resources/views/vendor/filament-fullcalendar", recursive: true);

    expect($run())
        ->toContain('published views of the package')
        ->toContain('rm -r resources/views/vendor/filament-fullcalendar');

    expect(is_dir("{$project}/resources/views/vendor/filament-fullcalendar"))->toBeTrue();
});

it('writes plain text when its output is not a terminal', function () {
    $output = (new Process([PHP_BINARY, 'bin/filament-fullcalendar-v5', 'no-such-directory', '--no-interaction', '--no-create-button'], dirname(__DIR__, 2)))
        ->mustRun()
        ->getOutput();

    expect($output)->toContain('Skipping no-such-directory')->not->toContain("\e[");
});
