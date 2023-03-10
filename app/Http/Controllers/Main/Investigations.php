<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PrefectInvestigations;

class Investigations extends Controller
{
    public function showStore() {
        $datalists = PrefectInvestigations::get();
        return response()->json(compact('datalists'));
    }
}
