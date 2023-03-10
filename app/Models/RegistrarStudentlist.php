<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrarStudentlist extends Model
{
    use HasFactory;
    protected $table = 'registrar_studentlist'; 
    protected $guarded=[];
    
    protected $with = ['sections:Student_ID,Section'];

    public function sections () {
        return $this->belongsTo(RegistrarStudentSection::class, 'Student_ID', 'Student_ID');
    }
}
