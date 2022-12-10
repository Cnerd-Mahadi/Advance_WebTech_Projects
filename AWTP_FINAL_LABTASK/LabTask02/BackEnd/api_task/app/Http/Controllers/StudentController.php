<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function submitForm(Request $request){

        $student = new  Student();
        $student->name = $request->name;
        $student->gender = $request->gender;
        $student->email = $request->email;
        $student->country = $request->country;
        $student->save();

        return $request;

    }

    public function showAllStudent(){
        return Student::all();
    }
}
