<?php

namespace App\Http\Controllers\Scolarite;

use App\Http\Controllers\Controller;
use App\Models\Classe;
use App\Models\Ressource;
use App\Models\Cour;
use App\Models\TypeRessource;
use App\Models\AnneeAcademique;
use App\Http\Resources\ResourceResource;
use App\Http\Resources\TypeRessourceResource;
use App\Http\Resources\CourResource;
use App\Http\Requests\StoreResourceRequest;
use App\Http\Requests\UpdateResourceRequest;
use App\Http\Resources\AnneeAcademiqueResource;
use App\Http\Resources\ClasseResource;
use Illuminate\Http\Requests;
use Inertia\Inertia;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Ressource::query();
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
        $types = TypeRessource::all();
        $annees = AnneeAcademique::all();
        return Inertia::render('Scolarite/Resources/Index',[
            'resources' => ResourceResource::collection($resource),
            'classes' => ClasseResource::collection($classes),
            'cours' => CourResource::collection($cours),
            'types' => TypeRessourceResource::collection($types),
            'annees' => AnneeAcademiqueResource::collection($annees),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classe::all();
        $cours = Cour::all();
        $types = TypeRessource::all();
        $annees = AnneeAcademique::all();
        return Inertia::render('Scolarite/Resources/Create',[
        'classes' => ClasseResource::collection($classes),
        'cours' => CourResource::collection($cours),
        'types' => TypeRessourceResource::collection($types),
        'annees' => AnneeAcademiqueResource::collection($annees),
        ]
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResourceRequest $request)
    {
       $data= $request->validated();
       

       $type= TypeRessource::where('intitule', $data['type'])->first();
       
       $cour = Cour::where('intitule', $data['cour'])->first();
      
       $annee = AnneeAcademique::where('intitule', $data['annee'])->first();
       //dd($annee);
       $file = $data['ressource'];
       $path = $file->store('ressources', 'public');

       $intitule = $data['intitule'] ." ". $data['cour'];
       
       $ressource = Ressource::create([
        'intitule' => $intitule,
        'fichier' => $file->getClientOriginalName(),
        'chemin' => $path,
        'cour_id' => $cour->id,
        'type_ressource_id' => $type->id,
        'annee_academique_id' =>$annee->id
       ]);

    $ressource->classes()->attach($data['classes']);

    return to_route('resource.index')->with('success', 'Ressource ajoutee avec succe');
      
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
