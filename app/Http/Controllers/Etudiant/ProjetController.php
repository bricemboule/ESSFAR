<?php

namespace App\Http\Controllers\Etudiant;

use App\Http\Controllers\Controller;
use App\Models\Classe;
use App\Models\Projet;
use App\Models\Cour;
use App\Http\Resources\ProjetResource;
use App\Http\Resources\CourResource;
use App\Http\Requests\StoreProjetRequest;
use App\Http\Requests\UpdateProjetRequest;
use App\Http\Resources\ClasseResource;
use Illuminate\Http\Requests;
use Inertia\Inertia;

class ProjetController extends Controller
{
    public function index()
    {
        $query = Projet::query();
        $sortField = request("sort_field",'intitule');
        $sortDirection = request("sort_direction", "asc");
        if(request("name")){
            $query->where("intitule", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $resource = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
        $classes = Classe::all();
        $cours = Cour::all();
        
        return Inertia::render('Etudiant/Projet/Index',[
            'projets' => ProjetResource::collection($resource),
            'classes' => ClasseResource::collection($classes),
            'cours' => CourResource::collection($cours),
            
            'queryParams' => request()->query() ?: null,
        ]);
    }
}
