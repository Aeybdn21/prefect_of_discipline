<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RegistrarStudentlist;
use App\Models\CategorizeCase;
use App\Models\StudentRecordModel;
use Illuminate\Support\Facades\Validator; 
use Illuminate\Validation\ValidationException;

class StudentRecord extends Controller
{
    public function registrar_records() {
        $registrar_recordslist = RegistrarStudentlist::all();
        $categorize = CategorizeCase::all();
        return response()->json(compact('registrar_recordslist', 'categorize'));
    }

    public function add_violation (Request $request) {
        $validator = Validator::make($request->all(), [
            "student_id" => "required",
            "offense" => "required",
            "categorize_case" => "required"
        ]);
        $message = "";
        $error = false;
        $data=[];
        if($validator->fails()) {
            $error = true;
            $message = "failed require fields.";
            $data = $validator->errors()->all();
            return response()->json(compact('message', 'error', 'data'));
        }else {
            $student_record = new StudentRecordModel;
            $student_record->student_id = $request->student_id;
            $student_record->offense_id = $request->offense;
            $student_record->categorize_id = $request->categorize_case;
            $student_record->others = $request->others;
            $student_record->save();
        }
        
        return response()->json(compact('message', 'error', 'data'));
    }

    public function fetchStudentRecords() {
        $student_records = StudentRecordModel::with(['sanctions', 'studentsInfo', 'violations' => function($query) {
            $query->select('id', 'description');
        }])->get();
        return response()->json(compact('student_records'));
    }
}
