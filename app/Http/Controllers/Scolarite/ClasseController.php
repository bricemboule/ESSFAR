<?php

namespace App\Http\Controllers\Scolarite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classe;

class ClasseController extends Controller
{
    
    public function getEtudiantClasse(Request $request){

        //\Log::info('🔍 Paramètres reçus : ', $request->all());
        //$request->validate(['classe_id', 'required|exists:classes, id']);
        
        //Je recupere la liste des etudiants d'un classe
        $etudiants = Classe::find($request->classe_id)->etudiants;

        return response()->json($etudiants);

    }

    public function getCoursClasse(Request $request){

        //$request-validate(['classe_id', 'required|exists:classes, id']);

        $cours = Classe::find($request->classe_id)->cours;

        return response()->json($cours);

    }
}
