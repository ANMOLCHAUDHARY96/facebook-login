<?php
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


Route::group([

    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('/user/verify/{token}', 'Auth\RegisterController@verifyUser');

});




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//it will list all login
Route::get('loginshow','LoginController@index');

//list single
Route::get('login/{id}','LoginController@show');

//create login

Route::post('signup','LoginController@store');

//update login

//Route::put('login','LoginController@store');

//delete login

//Route::delete('loginshow/{id}','LoginController@');
