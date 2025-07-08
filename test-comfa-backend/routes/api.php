<?php
// routes/api.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonajeController;

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

// Ruta de ejemplo para autenticación de usuario si la necesitaras
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Ruta adicional para el método de búsqueda flexible
// Asegúrate de que esta ruta no colisione con las rutas de recurso
Route::prefix('personajes')->group(function () {
    Route::get('buscar', [PersonajeController::class, 'buscar']);
    // Otras rutas específicas de 'personajes' que no sean parte del resource
});

// Rutas de recurso para el controlador de personajes
// Esto crea rutas para index, store, show, update, destroy
Route::resource('personajes', PersonajeController::class);
