<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ClinicRequestModel;
use Illuminate\Support\Facades\Validator; 

class ClinicController extends Controller
{
    //
    public function clinic_request(Request $request) {
        $clinic_request = ClinicRequestModel::where('student_id','!=', null)->get();
        return response()->json(compact('clinic_request'));
    } 

    public function clinic_approve_decline(Request $request) {
        $validator = Validator::make($request->all(), [
            'req_id' => 'required|integer',
            'status' => 'required|string'
        ]);
        $message = "";
        $error = false;
        $data=[];
        if($validator->fails()) {
            $error = true;
            $message = "failed require fields.";
            $data = $validator->errors()->all();
            return response()->json(compact('message', 'error', 'data'));
        }

        $clinic_request = ClinicRequestModel::where('id', $request->req_id)->update([
            'status' => $request->status
        ]);
        $data = $clinic_request;
        return response()->json(compact('message', 'error', 'data'));
    }
}
