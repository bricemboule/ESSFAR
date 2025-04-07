<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Controller pour chef scolarite
use App\Http\Controllers\Scolarite\ResourceController as ScolariteResourceController;
use App\Http\Controllers\Scolarite\DevoirController as ScolariteDevoirController;
use App\Http\Controllers\Scolarite\ProjetController as ScolariteProjetController;
use App\Http\Controllers\Scolarite\EtudiantController as ScolariteEtudiantController;
use App\Http\Controllers\Scolarite\EnseignantController as ScolariteEnseignantController;
use App\Http\Controllers\Scolarite\CourController as ScolariteCourController;
use App\Http\Controllers\Scolarite\SanctionController as ScolariteSanctionController;
use App\Http\Controllers\Scolarite\ClasseController as ScolariteClasseController;
use App\Http\Controllers\Scolarite\RetardController as ScolariteRetardController;
//Controller pour l'admin
use App\Http\Controllers\Admin\PersonnelController as AdminPersonnelController;
use App\Http\Controllers\Admin\EtudiantController as AdminEtudiantController;
use App\Http\Controllers\Admin\EnseignantController as AdminEnseignantController;
use App\Http\Controllers\Admin\SalleController as AdminSalleController;
use App\Http\Controllers\Admin\ClasseController as AdminClasseController;
use App\Http\Controllers\Admin\RoleController as AdminRoleController;
use App\Http\Controllers\Admin\AnneController as AdminAnneeController;

//Controller pour Etudiant
use App\Http\Controllers\Etudiant\ProjetController as EtudiantProjetController;
use App\Http\Controllers\Etudiant\DevoirController as EtudiantDevoirController;
use App\Http\Controllers\Etudiant\RessourceController as EtudiantRessourceController;
use App\Http\Controllers\Etudiant\CourController as EtudiantCourController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
      
    ]);
});

Route::prefix('admin')->middleware(['auth', 'verified', 'role:Admin'])->group(function() {
    Route::get('/dashboard', fn () =>Inertia::render('Dashboard'))->name('admin.dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
   
    Route::resource('/personnel', AdminPersonnelController::class);
    Route::resource('/role', AdminRoleController::class);
    Route::resource('/annee',AdminAnneeController::class);
    Route::resource('/classe', AdminClasseController::class);
    Route::resource('/etudiant', AdminEtudiantController::class,[
        'as' => 'admin',
    ]);
    Route::resource('/enseignant', AdminEnseignantController::class,[
        'as' => 'admin',
    ]);
    Route::resource('/salle', AdminSalleController::class);
    Route::put('annee/activer/{annee}', [AdminAnneeController::class, 'activated'])->name('annee_activated');
    Route::post('etudiant/import', [AdminEtudiantController::class, 'import'])->name('etudiant.import');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

Route::prefix('scolarite')->middleware(['auth', 'verified','role:Chef Scolarite'])->group(function() {
    Route::get('/dashboard', fn () =>Inertia::render('Dashboard'))
                                            ->name('scolarite.dashboard');
    Route::resource('/etudiant', ScolariteEtudiantController::class);
    Route::resource('/enseignant', ScolariteEnseignantController::class);
    Route::resource('/cour', ScolariteCourController::class);
    Route::resource('/projet', ScolariteProjetController::class);
    Route::resource('/devoir', ScolariteDevoirController::class);
    Route::get('/sanction/recap', [ScolariteSanctionController::class,'RecapRetardAbsence'])->name('sanction.recap');
    Route::resource('/sanction', ScolariteSanctionController::class);
    Route::resource('/resource', ScolariteResourceController::class);
    Route::get('/etudiants_classe', [ScolariteClasseController::class, 'getEtudiantClasse']);
    Route::get('/cours', [ScolariteClasseController::class, 'getCoursClasse']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('scolarite.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('scolarite.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('scolarite.profile.destroy');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('scolarite.logout');
});

Route::prefix('etudiant')->middleware(['auth', 'verified','role:etudiant'])->group(function() {
    Route::get('/dashboard', fn () =>Inertia::render('Dashboard'))
                                            ->name('etudiant.dashboard');
    Route::get('/cour', [EtudiantCourController::class,'index'])->name('cour_et.index');
    Route::get('/devoirs', [EtudiantDevoirController::class,'index'])->name('devoir_et.index');
    Route::get('/projets', [EtudiantProjetController::class, 'index'])->name('projets.index');
    Route::get('/ressources', [EtudiantRessourceController::class, 'index'])->name('ressources.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('etudiant.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('etudiant.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('etudiant.profile.destroy');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('etudiant.logout');

});
Route::prefix('stock')->middleware(['auth', 'verified','role:stock'])->group(function() {
    Route::get('stock/dashboard', fn () =>Inertia::render('Dashboard'))
                                            ->name('stock.dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('stock.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('stock.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('stock.profile.destroy');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

});


require __DIR__.'/auth.php';
