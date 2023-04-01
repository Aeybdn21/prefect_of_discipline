<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicRequestModel extends Model
{
    use HasFactory;
    protected $table = "clinic_prefect_integ";
    protected $guarded = [];
    public $timestamps = false;
}
