<?php

namespace App\Http\Controllers;

use App\Models\Auth;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function submitForm(Request $request){

        $student = new  Student();
        $student->name = $request->name;
        $student->gender = $request->gender;
        $student->email = $request->email;
        $student->password = $request->password;
        $student->country = $request->country;
        $student->save();
        return $request;

    }

    public function authSave(Request $request){

        $auth = new  Auth();
        $auth->user_id = $request->userId;
        $auth->created = $request->created;
        $auth->save();
        return $request;

    }

    public function login(Request $request){

        $user = Student::where('name', $request->name)
        ->where(
            'password', $request->password
        )
        ->first(
        );

        if($user){
            $auth = Auth();
            $auth->user_id = $user->student_id;
            $auth->created = date();
            $auth->save();
            return $request;

        }

    }

    public function showAllStudent(){
        return Student::all();
    }
}
