<?php

namespace App\Http\Controllers\Scolarite;

use App\Http\Controllers\Controller;
use App\Models\Classe;
use App\Models\Devoir;
use App\Models\Cour;
use App\Http\Resources\DevoirResource;
use App\Http\Resources\CourResource;
use App\Http\Requests\StoreDevoirRequest;
use App\Http\Requests\UpdateDevoirRequest;
use App\Http\Resources\ClasseResource;
use Illuminate\Http\Requests;
use Inertia\Inertia;

class DevoirController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Devoir::query();
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
        
        return Inertia::render('Scolarite/Devoir/Index',[
            'devoirs' => DevoirResource::collection($resource),
            'classes' => ClasseResource::collection($classes),
            'cours' => CourResource::collection($cours),
            
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
      
        return Inertia::render('Scolarite/Devoir/Create',[
        'classes' => ClasseResource::collection($classes),
        'cours' => CourResource::collection($cours),
        ]
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDevoirRequest $request)
    {
        $data= $request->validated();
        $cour = Cour::where('intitule', $data['cour'])->first();
        $file = $data['ressource'];
        $path = $file->store('ressources', 'public');
 
        $intitule = $data['intitule'];
        
        $devoir = Devoir::create([
         'intitule' => $intitule,
         'fichier' => $file->getClientOriginalName(),
         'chemin' => $path,
         'cour_id' => $cour->id,
         'date_limite' => $data['date_limite']
        ]);
 
     $devoir->classes()->attach($data['classes']);
 
     return to_route('devoir.index')->with('success', 'Devoir ajoute avec succe');
       
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
