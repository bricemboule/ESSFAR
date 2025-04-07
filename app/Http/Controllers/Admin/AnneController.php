<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AnneeAcademique;
use App\Http\Resources\AnneeAcademiqueResource;
use App\Http\Requests\StoreAnneeRequest;
use Inertia\Inertia;

class AnneController extends Controller
{
    public function index()
    {
        $query = AnneeAcademique::query()->orderBy('created_at', 'desc');
        $sortField = request("sort_field",'intitule');

        if(request("intitule")){
            $query->where("intitule", "like","%".request("intitule")."%");
        }
        $annees = $query->orderBy($sortField)->paginate(10)->onEachSide(1);
    
        return Inertia::render('Admin/Annee/Index',[
            'annees' => AnneeAcademiqueResource::collection($annees),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Annee/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAnneeRequest $request)
    {
        $lastyear = AnneeAcademique::latest()->first();

        $lastyear->status = 'desactivée';
        $lastyear->save();
        AnneeAcademique::create($request->validated());

        return to_route('annee.index')->with('success', 'annee académique crée avec succe');
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
    public function edit(AnneeAcademique $annee)
    {
        return Inertia::render('Admin/Annee/Edit',[
            'annee' => new AnneeAcademiqueResource($annee)
        ]
        
    );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnneeRequest $request, AnneeAcademiques $annee)
    {
        $annee->update($request->validated());

        return to_route('annee.index')->with('success', "Annee \"$annee->intitule\" modifiée avec succes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AnneeAcademique $annee)
    {
        $annee->status = 'desactivée';
     
        $annee->save();
        return to_route('annee.index')->with('success', "Année \"$annee->intitule\" désactivée avec succes");

    }

    public function activated(AnneeAcademique $annee){

        $annee->status = 'activée';
        $annee->save();
        return to_route('annee.index')->with('success', "Année \"$annee->intitule\" activée avec succes");
    }
}
