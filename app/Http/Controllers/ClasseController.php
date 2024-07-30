<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Http\Resources\ClasseResource;
use App\Http\Requests\StoreClasseRequest;
use App\Http\Requests\UpdateClasseRequest;
use Inertia\Inertia;

class ClasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Classe::query();
       
        //$sortDirection = request("sort_direction", "desc");
       
    

        $classes = $query->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/Classe/Index',[
            'classes' => ClasseResource::collection($classes),
            //'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Classe/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClasseRequest $request)
    {
        Classe::create($request->validated());

        return to_route('classe.index')->with('success', 'classe crée avec succe');
    }

    /**
     * Display the specified resource.
     */
    public function show(Classe $classe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classe $classe)
    {
        return Inertia::render('Admin/Classe/Edit',[
            'classe' => new ClasseResource($classe)
        ]
        
    );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClasseRequest $request, Classe $classe)
    {
        $classe->update($request->validated());

        return to_route('classe.index')->with('success', "Classe \"$classe->intitule\"supprime avec succes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classe $classe)
    {
        $nom = $classe->intitule;
        $classe->delete();

        return to_route('classe.index')->with('success', "Classe \"$nom\" suprimé avec succes");

    }
}
