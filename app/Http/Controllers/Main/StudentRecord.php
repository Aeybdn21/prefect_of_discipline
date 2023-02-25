<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RegistrarStudentlist;

class StudentRecord extends Controller
{
    public function registrar_records() {
        $registrar_recordslist = RegistrarStudentlist::all();
        return response()->json(compact('registrar_recordslist'));
    }
}
