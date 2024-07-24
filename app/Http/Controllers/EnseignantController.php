<?php

namespace App\Http\Controllers;

use App\Models\Enseignant;
use App\Http\Resources\EnseignantResource;
use App\Http\Requests\StoreEnseignantRequest;
use App\Http\Requests\UpdateEnseignantRequest;
use Inertia\Inertia;

class EnseignantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Enseignant::query();
        $sortField = request("sort_field",'email');
        $sortDirection = request("sort_direction", "desc");
        if(request("name")){
            $query->where("intitule", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $enseignant = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Enseignant/Index',[
            'enseignants' => EnseignantResource::collection($enseignant),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEnseignantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Enseignant $enseignant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enseignant $enseignant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEnseignantRequest $request, Enseignant $enseignant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enseignant $enseignant)
    {
        //
    }
}
