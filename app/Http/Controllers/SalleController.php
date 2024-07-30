<?php

namespace App\Http\Controllers;

use App\Models\Salle;
use App\Http\Resources\SalleResource;
use App\Http\Requests\StoreSalleRequest;
use App\Http\Requests\UpdateSalleRequest;
use Inertia\Inertia;

class SalleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Salle::query();
       
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $salles = $query->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/Salle/Index',[
            'salles' => SalleResource::collection($salles),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Salle/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSalleRequest $request)
    {
        Salle::create($request->validated());

        return to_route('salle.index')->with('success', "Salle \"$request->intitule\" ajoutée avec succes");
    }

    /**
     * Display the specified resource.
     */
    public function show(Salle $salle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Salle $salle)
    {
        return Inertia::render('Admin/Salle/Edite',[
            'salle' => new SalleResource($salle)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSalleRequest $request, Salle $salle)
    {
        $salle->update($request->validated());

        return to_route('salle.index')->with('success', "Salle \"$request->nomSalle\" modifiée avec succès");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Salle $salle)
    {
        $nom = $salle->nomSalle;

        $salle->delete();

        return to_route('salle.index')->with('success', "Salle \"$nom\" supprimée vavec succès");
    }
}
