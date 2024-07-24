<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use App\Http\Resources\EtudiantResource;
use App\Http\Requests\StoreEtudiantRequest;
use App\Http\Requests\UpdateEtudiantRequest;
use Inertia\Inertia;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Etudiant::query();
        $sortField = request("sort_field",'email');
        $sortDirection = request("sort_direction", "desc");
        if(request("name")){
            $query->where("intitule", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $etudiant = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Etudiant/Index',[
            'etudiants' => EtudiantResource::collection($etudiant),
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
    public function store(StoreEtudiantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Etudiant $etudiant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Etudiant $etudiant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEtudiantRequest $request, Etudiant $etudiant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etudiant $etudiant)
    {
        //
    }
}
