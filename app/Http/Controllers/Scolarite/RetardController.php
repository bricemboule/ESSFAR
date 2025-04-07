<?php

namespace App\Http\Controllers\Scolarite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Sanction;

class RetardController extends Controller
{
    public function RecapRetardAbsence(){
       
        $sanctionsParClasse = Sanction::select('classe_id', 'matiere_id', 'etudiant_id')
            ->selectRaw("SUM(CASE WHEN type = 'retard' THEN 1 ELSE 0 END) as total_retards")
            ->selectRaw("SUM(CASE WHEN type = 'absence' THEN 1 ELSE 0 END) as total_absences")
            ->groupBy('classe_id', 'matiere_id', 'etudiant_id')
            ->with(['etudiant', 'classe', 'matiere']) // Inclure les relations
            ->get();

        return Inertia::render('Scolarite/Sanction/Recap', ['sanctions' => SanctionRessource::collection($sanctionsParClasse)]);
    }
}
