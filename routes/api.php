<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\HomeController;
use App\Http\Controllers\Main\StudentRecord;
use App\Http\Controllers\Main\CaseStudyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|asdasdasasd asdasda asda
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::middleware(['auth:api', 'scope:admin-side'])->group(function() {
//     Route::post('testing', [HomeController::class, 'test']);
// });

Route::middleware(['auth:api'])->group(function(){
    Route::prefix('v1')->group(function() {
        Route::get('registrar_student_list', [StudentRecord::class, 'registrar_records'])->name('registrar_student_list');
        Route::post('add_violation', [StudentRecord::class, 'add_violation'])->name('add_violations');
        Route::post('student_records', [StudentRecord::class, 'fetchStudentRecords'])->name('student_records');
        Route::post('add_sanctions', [StudentRecord::class, 'sanctionRecords'])->name('add_sanctions');
        Route::post('update_student_info', [StudentRecord::class, 'updateStudentInfo'])->name('update_student_info');
        Route::post('case_study_store', [CaseStudyController::class, 'storeCaseStudy'])->name('case_study_store');
    });
});