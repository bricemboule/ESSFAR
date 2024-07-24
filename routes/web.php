<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\EnseignantController;
use App\Http\Controllers\SalleController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\RoleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', fn () =>Inertia::render('Dashboard'))
                                            ->name('dashboard');  
    Route::resource('user', UserController::class);
    Route::resource('role', RoleController::class);
    Route::resource('classe', ClasseController::class);
    Route::resource('etudiant', EtudiantController::class);
    Route::resource('enseignant', EnseignantController::class);
    Route::resource('salle', SalleController::class);
    Route::resource('cour', CourController::class);
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
