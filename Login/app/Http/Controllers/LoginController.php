<?php

namespace App\Http\Controllers;
use App\fblogin;
use Illuminate\Http\Request;
use App\Http\Resources\Login;
//use App\Http\Requests\validation;

class LoginController extends Controller
{
    
    public function index()
    {
       
         $loginshow=fblogin::paginate(15);
         return Login::collection($loginshow);

    }

    
    public function store(Request $request)
    {
        $login=$request->isMethod('put')?fblogin::findOrFail($request->id):new fblogin;
        $login->firstname=$request->input('firstname');
        $login->lastname=$request->input('lastname');
        $login->username=$request->input('username');
        $login->email=$request->input('email');
        $login->password=$request->input('password');
        $login->gender=$request->input('gender');

        if($login->save()){
            return $login;
        }
    }

    
    public function show($id)
    {
        
        $login=fblogin::findOrFail($id);
        return $login;
    }

    
    public function destroy($id)
    {
        $login=fblogin::findOrFail($id);
        if($login->delete()){
       return $login;
    }
}
}
