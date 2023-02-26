<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; 
use Illuminate\Database\Eloquent\Casts\Attribute;


class StudentRecordModel extends Model
{
    use HasFactory;
    protected $table = "student_records";
    protected $guard = [];
 
    protected $appends = ['offenses', 'status'];

    public function studentsInfo() {
       return $this->belongsTo(RegistrarStudentlist::class, "student_id", "Student_ID");
    }
    
    public function violations () {
        return $this->hasOne(CategorizeCase::class, "id", "categorize_id");
    }

    public function sanctions() {
        return $this->hasOne(SanctionRecords::class, "studrec_id", "id");
    }
 
    public function getOffensesAttribute() {
        return $this->offense_id == 0? 'Minor Offense': 'Major Offense';
    }

    public function getStatusAttribute() {
        return StudentStatus::where('id', $this->status_id)->select('description')->first();
    }
}
