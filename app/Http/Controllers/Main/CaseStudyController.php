<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; 
use App\Models\PrefectInvestigations;

class CaseStudyController extends Controller
{


    public function storeCaseStudy (Request $request) {
       
        $validator = Validator::make($request->all(), [
            'student_number' => 'required',
            'detail_text' => 'required|string',
            'categorize_id' => 'required|integer',
        ], trans('case_study.message'));
         
        $message = '';
        $error = false;
        $status_code = 0;
        $data=[];
        $params = array();

        if($validator->fails()){
            $message_1 = $validator->messages();
            if($message_1->has('student_number')){
                $params = [...$params, 'student_number'];
            }
            if($message_1->has('detail_text')){
                $params = [...$params, 'detail_text'];
            }
             if ($message_1->has('categorize_id')){
                $params = [...$params, 'categorize_id'];
            }
            $data = array(
                'error_list' => $validator->errors()->all(),
                'params' => $params
            );
            $error = true; 
            $json = compact('data', 'error', 'status_code');
            return response()->json($json);
        }

        if($request->case_parties_enable){
            
            $validator2 = Validator::make($request->all(),[
                'case_parties_id' => 'required|integer|max:2'
            ], [
                'case_parties_id.required' => 'Please choose the Case Parties field to continue.'
            ]);
            
            if($validator2->fails()) {
                $message_2 = $validator2->messages();
                if($message_2->has('case_parties_id')){
                    $params = [...$params, 'case_parties_id'];
                }
                $data = array(
                    'error_list' => $validator2->errors()->all(),
                    'params' => $params
                );
                $error = true; 
                return response()->json(compact('data', 'error', 'status_code'));
            }
        }

        if($request->categorize_id == 6) {
            $message_validator3 = array(
                'claimable.required' => 'The Confiscated item checkbox needed to choose eighter Claimable or Not Claimable',
                'specify_desc.required' => 'Please Specify the confiscated item'
            );
            $validator3 = Validator::make($request->all(), [
                'claimable' => 'required|boolean',
                'specify_desc' => 'required'
            ], $message_validator3);
           
            if($validator3->fails()){
                $message_3 =  $validator3->messages();
                if($message_3->has('claimable')){
                    $params = [...$params, 'claimable'];
                }
                if($message_3->has('specify_desc')) {
                    $params = [...$params, 'specify_desc'];
                }

                $data = array(
                    'error_list' => $validator3->errors()->all(),
                    'params' => $params
                );
                $error = true; 
                return response()->json(compact('data', 'error', 'status_code'));
            }
        }

        PrefectInvestigations::create([
            'student_num' => $request->student_number,
            'case_parties_id' => $request->case_parties_id,
            'details_html' => $request->detail_text,
            'categorize_id' => $request->categorize_id,
            'claimable' => $request->claimable,
            'specify_desc' => $request->specify_desc,
            'investigate_status_id' => 1
        ]);

        $status_code = 1;
        $message = 'SuccessFul store'; 

        return response()->json(compact('data','status_code', 'message'));
    }
}
