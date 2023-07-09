<?php

use App\Http\Controllers\TasksController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/taches', [TasksController::class, 'index'])->name('taches.index');
Route::get('/taches/create', [TasksController::class, 'create'])->name('taches.create');
Route::post('/taches', [TasksController::class, 'store'])->name('taches.store');
Route::get('/taches/{id}/edit', [TasksController::class, 'edit'])->name('taches.edit');
Route::put('/taches/{id}', [TasksController::class, 'update'])->name('taches.update');
Route::delete('/taches/{id}', [TasksController::class, 'destroy'])->name('taches.destroy');