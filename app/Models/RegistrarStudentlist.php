<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrarStudentlist extends Model
{
    use HasFactory;

    protected $connection = 'mysql_1';

    protected $table = 'registrar_studentlist'; 
    protected $guarded=[];
    protected $appends = ['student_fullname', 'year_section', 'contact_num63'];  
    protected $with = ['sections:Student_ID,Section,Course'];
    public function sections () {
        return $this->belongsTo(RegistrarStudentSection::class, 'Student_ID', 'Student_ID');
    }
    public function getStudentFullnameAttribute(){
        $lastname = $this->Lastname;
        $firstname = $this->Firstname;
        $middlename = $this->Middlename;
        $fullname = "$lastname, $firstname $middlename.";
        return $fullname;
    }

    public function getYearSectionAttribute(){
        $course = isset($this->sections->Course)? $this->sections->Course: "";
        $sections = isset($this->sections->Section)? $this->sections->Section : "";
        return "$course-$sections";
    }
    public function getContactNum63Attribute(){
        $contact_num = $this->Contact_No;
        return "+63$contact_num";
    }
}
