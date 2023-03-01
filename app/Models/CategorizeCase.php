<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use DB;
class CategorizeCase extends Model
{
    use HasFactory;
    
    protected $table = "prefect_categorize_cases";
    protected $guard = [];

}
