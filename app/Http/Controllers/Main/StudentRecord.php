<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RegistrarStudentlist;
use App\Models\CategorizeCase;
use App\Models\StudentRecordModel;
use Illuminate\Support\Facades\Validator; 
use Illuminate\Validation\ValidationException;
use App\Models\Sanctions;
use App\Models\SanctionRecords;
use App\Models\StudentStatus;


class StudentRecord extends Controller
{
    public function registrar_records() {
        $registrar_recordslist = RegistrarStudentlist::whereNotIn('student_id', 
            StudentRecordModel::where('status_id',null)->select('student_id')->pluck('student_id')
        )->get();
        $categorize = CategorizeCase::all();
        $sanctions = Sanctions::get();
        $statuses = StudentStatus::get();
        $student_record = StudentRecordModel::where('status_id', null) -> get();
       
        return response()->json(compact(
            'registrar_recordslist', 
            'categorize', 
            'sanctions', 
            'student_record', 
            'statuses', 
        ));
    }

    public function add_violation (Request $request) {
        $validator = Validator::make($request->all(), [
            "student_id" => "required",
            // "offense" => "required",
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
            $student_record->investigation_id = $request->investigation_id;
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

    public function sanctionRecords(Request $request) {
        $validator = Validator::make($request->all(), [
            "student_refid" => "required",
            "sanction_id" => "required", 
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
            
            $sanction_record = new SanctionRecords;
            if(!$sanction_record->where('studrec_id', $request->student_refid)->exists()) {
                $sanction_record->studrec_id = $request->student_refid;
                $sanction_record->sancat_id = $request->sanction_id;
                $sanction_record->others = $request->others; 
                $sanction_record->save();
            }else {
                $existing = $sanction_record->where('studrec_id', $request->student_refid);
                $existing->update([
                    'sancat_id' => $request->sanction_id,
                    'others' => $request->others ? $request->others: $existing->first()->others
                ]);
            }
        }
        
        return response()->json(compact('message', 'error', 'data'));
    }

    public function updateStudentInfo (Request $request) {
        $validator = Validator::make($request->all(), [
            "student_id" => "required",
            "offense" => "required",
            "categorize_case" => "required",
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
            $message = "Success Updated";
            $student_record = StudentRecordModel::where('student_id', $request->student_id);
            $student_record->update([
                "offense_id" => $request->offense,
                "categorize_id" => $request->categorize_case,
                "status_id" => $request->status_id,
                "others" => $request->others,
                "message" => $request->message
            ]);
            
        }
        
        return response()->json(compact('message', 'error', 'data'));
    }
}
