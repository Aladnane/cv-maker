<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('sign-up', [AuthController::class, 'sign_up']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('check-token', [AuthController::class, 'check_token']);
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
