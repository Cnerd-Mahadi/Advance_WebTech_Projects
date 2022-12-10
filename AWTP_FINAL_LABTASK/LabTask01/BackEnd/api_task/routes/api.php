<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/submit',[StudentController::class,'submitForm']);
Route::post('/auth-save',[StudentController::class,'authSave']);
Route::post('/login',[StudentController::class,'login']);
Route::get('/show',[StudentController::class,'showAllStudent']);
