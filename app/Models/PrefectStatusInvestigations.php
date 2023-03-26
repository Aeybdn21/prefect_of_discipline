<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrefectStatusInvestigations extends Model
{
    use HasFactory;
    protected $table = "pd_status_investigations";

    protected $guarded = [];
}
