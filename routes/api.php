<?php

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

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post('logout', 'UserController@logout');
    Route::post('events', 'EventController@store');
    Route::get('events/{user_id}', 'EventController@show');
    Route::delete('events/{id}', 'EventController@destroy');
    Route::put('events/{id}', 'EventController@update');
});
