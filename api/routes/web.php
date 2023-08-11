<?php

use Ratchet\Server\IoServer;
use App\Http\WebSocketServer;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/websocket', function () {
    $server = IoServer::factory(
        new WebSocketServer(),
        8080 // Porta para o WebSocket
    );

    $server->run();
});
