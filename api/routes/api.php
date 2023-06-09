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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/countries', 'App\Http\Controllers\CountriesController@index');


Route::get('/history', 'App\Http\Controllers\HistoryController@index');
Route::post('/history', 'App\Http\Controllers\HistoryController@store');
Route::get('/history/{history}', 'App\Http\Controllers\HistoryController@show');
Route::delete('/history/{history}', 'App\Http\Controllers\HistoryController@destroy');