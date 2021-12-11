<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;

class TaskController extends Controller
{
  public function getTask(){
    return response()->json(Tasks::all(),200);
  }



  public function getTaskByID($id){
    $task =tasks::find($id);
    {
        if (is_null($task)){
            return response()->json(['message'=>'Employee Not Found'],404);
        }

        return response()->json($task::find($id),200);
    }
  }


  public function addTask(Request $request){
    $task=  Tasks::create($request->all());
    return response($task,201);
 }
 
  public function updateTask(Request $request,$id){
      $task=Tasks::find($id);
      if(is_null($task)){
        return response()->json(['message'=>'Employee Not Found'],404);
      }
      $task-> update($request->all());
      return response($task,200);
  }

  public function DeleteTask(Request $request,$id){
    $task=Tasks::find($id);
    if(is_null($task)){
        return response()->json(['message'=>'Employee Not Found'],404);
      }
      $task->delete();
      return response()->json(null,204);
  }
}
