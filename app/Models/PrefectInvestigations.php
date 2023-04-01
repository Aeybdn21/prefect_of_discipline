<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrefectInvestigations extends Model
{
    use HasFactory;

    // protected $connection = 'mysql_1';

    protected $table = "pd_investigations";
    protected $guarded = [];
    
    protected $appends = ['is_recorded'];
    protected $with = [
        'student_info:Student_ID,Lastname,Firstname,Middlename,Email,Course,Contact_No', 
        'violation_case',
        'investigation_status:id,description',
        'case_parties:id,description'
    ];

    public function student_info () {
        return $this->belongsTo(RegistrarStudentlist::class, 'student_num', 'Student_ID');
    }
    
    public function violation_case () {
        return $this->belongsTo(CategorizeCase::class, 'categorize_id');
    }

    public function investigation_status() {
        return $this->belongsTo(PrefectStatusInvestigations::class, 'investigate_status_id');
    }

    public function case_parties () {
        return $this->belongsTo(CaseParties::class, 'case_parties_id');
    }

    public function getClaimableAttribute($value){
        if($value !== null) {
            return $value == 1? 'Claimable' : 'Not Claimable';
        }
    }
    public function getIsRecordedAttribute(){
        $student_record = StudentRecordModel::where('investigation_id', $this->id)->first();
        return $student_record == null ? false: true;
    }
}
