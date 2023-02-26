<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class RegistrarStudentSection extends Model
{
    use HasFactory;
    protected $table = "registrar_studentsection";
    protected $guard = [];

    protected function YearLevel(): Attribute
    {
        return Attribute::make(
            get: function (integer $value) {
                // switch($value){
                //     case 1: return '1st year';
                //     case 2: return '2nd year';
                //     case 3: return '3th year';
                //     case 4: return '4th year';
                // } 
                return '';
            }, 
        );
    }

    protected function Major(): Attribute {
        return Attribute::make(
            get: fn(string $value) => 'testing'
        );
    }
}
