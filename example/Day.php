<?php

namespace App\Models;

use App\Enums\BaziEarthBranchEnum;
use App\Enums\BaziHeavenStemsEmum;
use App\Enums\DayConstelationEnum;
use App\Enums\DayOfficerEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Collection;

class Day extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'days';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['d', 'm', 'y', 'd1', 'd2', 'd3', 'd4', 'ddate'];

    public static function getCalendarArray(array $fetchInfo) : array {

        $tmp = [];

        $data = Day::query()
        ->where('ddate', '>=', $fetchInfo['start'])
        ->where('ddate', '<=', $fetchInfo['end'])
        ->get();
        
        foreach ($data as $d) {
            $tmp[$d->m."_".$d->d] = [
                'd1' => $d->d1,
                'd2' => $d->d2,
                'd3' => $d->d3,
                'd4' => $d->d4,
            ];            
        }
        return  $tmp;
    }

}
