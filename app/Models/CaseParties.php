<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseParties extends Model
{
    use HasFactory;
    
    // protected $connection = 'mysql_1';

    protected $table = 'pd_case_parties';
    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at'];
}
