<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/taches', [TacheController::class, 'index'])->name('taches.index');
Route::get('/taches/create', [TacheController::class, 'create'])->name('taches.create');
Route::post('/taches', [TacheController::class, 'store'])->name('taches.store');
Route::get('/taches/{id}/edit', [TacheController::class, 'edit'])->name('taches.edit');
Route::put('/taches/{id}', [TacheController::class, 'update'])->name('taches.update');
Route::delete('/taches/{id}', [TacheController::class, 'destroy'])->name('taches.destroy');