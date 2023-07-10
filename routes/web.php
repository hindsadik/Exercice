<?php

use App\Http\Controllers\TasksController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/task', [TasksController::class, 'index'])->name('task.index');
Route::get('/task/create', [TasksController::class, 'create'])->name('task.create');
Route::post('/task', [TasksController::class, 'store'])->name('task.store');
Route::get('/task/{id}/edit', [TasksController::class, 'edit'])->name('task.edit');
Route::put('/task/{id}', [TasksController::class, 'update'])->name('task.update');
Route::delete('/task/{id}', [TasksController::class, 'destroy'])->name('task.destroy');