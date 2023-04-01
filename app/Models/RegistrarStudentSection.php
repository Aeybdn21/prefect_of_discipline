<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class RegistrarStudentSection extends Model
{
    use HasFactory;
    
    // protected $connection = 'mysql_1';

    protected $table = "registrar_studentsection";
    protected $guarded = [];
  
}
