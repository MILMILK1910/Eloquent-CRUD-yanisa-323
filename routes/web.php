<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductStoreController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/productstores', [ProductStoreController::class, 'index'])->name('productstores.index');
    Route::get('/productstores/{id}/edit', [ProductStoreController::class, 'edit'])->name('productstores.edit');
    Route::put('/productstores/{id}', [ProductStoreController::class, 'update'])->name('productstores.update');
    Route::delete('/productstores/{id}', [ProductStoreController::class, 'destroy'])->name('productstores.destroy');
    Route::get('/productstores/create', [ProductStoreController::class, 'create'])->name('productstores.create');
    Route::post('/productstores', [ProductStoreController::class, 'store'])->name('productstores.store');
});

require __DIR__.'/auth.php';
