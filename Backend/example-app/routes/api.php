<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

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

//Add New Task
//Route::post('addtask}',[TaskController::class,'addTask']);
//Route::post('addtask','TaskController@addTask');
Route::post('addtask', 'App\Http\Controllers\TaskController@addTask');

//Get Specific Task
Route::get('task/{id}',[TaskController::class,'getTaskByID']);

//GetAllTasks
Route::get('tasks',[TaskController::class,'getTask']);

//UpdateTask
Route::put('updateTask/{id}',[TaskController::class,'updateTask']);

//DeleteTask
Route::delete('deleteTask/{id}',[TaskController::class,'DeleteTask']);

