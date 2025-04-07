<?php

namespace App\Http\Controllers\Etudiant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ressource;
use App\Models\AnneeAcademique;
use App\Models\Cour;
use App\Models\Classe;
use App\Models\TypeRessource;
use App\Http\Resources\ResourceResource;
use App\Http\Resources\TypeRessourceResource;
use App\Http\Resources\CourResource;
use App\Http\Resources\AnneeAcademiqueResource;

class RessourceController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $annee = AnneeAcademique::where('status', 'active')->first();
        $cours = Cour::all();
        $types = TypeRessource::all();
        $annees = AnneeAcademique::all();
        // Vérifiez que l'utilisateur est un étudiant
        if ($user->etudiant) {
            //$classe = $user->etudiant->classes;
            $classe = $user->etudiant->classeAnneeEnCours($annee->intitule);
            
            
            // Récupérez les ressources associées à la classe de l'étudiant
            $ressources = $classe->ressources;
            

            return inertia('Etudiant/Ressources/Index', [
                'resources' => ResourceResource::collection($ressources),
                'cours' => CourResource::collection($cours),
                'types' => TypeRessourceResource::collection($types),
                'annees' => AnneeAcademiqueResource::collection($annees),
            ]);
        }

        //return to_route('')->with('error', 'Accès non autorisé.');
    }
}
