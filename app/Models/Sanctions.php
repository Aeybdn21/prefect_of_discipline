<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanctions extends Model
{
    use HasFactory;
    
    protected $connection = 'mysql_1';

    protected $table = "pd_sanctions";
    protected $guarded = [];
}
