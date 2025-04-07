<?php

namespace App\Http\Controllers\Scolarite;

use App\Models\Classe;
use App\Models\Etudiant;
use App\Models\AnneeAcademique;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\SanctionRessource;
use App\Http\Resources\ClasseResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Sanction;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class SanctionController extends Controller
{
    public function RecapRetardAbsence(){
     
        $sanctionsParClasse = Sanction::select('classe_id', 'cour_id', 'etudiant_id')
            ->selectRaw("SUM(CASE WHEN type = 'retard' THEN 1 ELSE 0 END) as total_retards")
            ->selectRaw("SUM(CASE WHEN type = 'absence' THEN 1 ELSE 0 END) as total_absences")
            ->groupBy('classe_id', 'cour_id', 'etudiant_id')
            ->with(['etudiant', 'classe', 'cour']) 
            ->distinct()
            ->get();

        return Inertia::render('Scolarite/Sanction/Recap', ['sanctions' => $sanctionsParClasse]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
      
        $query = Sanction::query();
        //->join('etudiants', 'sanctions.etudiant_id', '=', 'etudiants.id')
        //->join('cours', 'sanction.cour_id', '=', 'cours.id')
        //->join('classes', 'sanction.classe_id', '=', 'classes.id');

        //$sortField = request("sort_field",'nom');
    //$sortDirection = request("sort_direction", "asc");
        /*if(request("nom")){
            $query->where("nom", "like","%".request("nom")."%");
        }*/
       
    

        $sanctions = $query->paginate(10)->onEachSide(1);
        
        $classes = Classe::all();
        return Inertia::render('Scolarite/Sanction/Index',[
            'sanctions' => SanctionRessource::collection($sanctions),
            'classes' => ClasseResource::collection($classes),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function bonjour(){
        dd("bbbb");
    }
    public function create()
    {
        
        $classes = Classe::all();
   
        return Inertia::render('Scolarite/Sanction/Create',[
        'classes' => ClasseResource::collection($classes)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'etudiant_id' => 'required|array',
            'classe_id' => 'required|exists:classes,id',
            'cour_id' => 'required|exists:cours,id',
            'type' => 'required|in:Retard,Absence',
        ]);
        
        foreach($request->etudiant_id as $et){
            $request['date'] = now()->format('d/m/Y');
            $annee = AnneeAcademique::where('status', 'activée')->first();
            $request['annee'] = $annee->id;
            $date = Carbon::createFromFormat('d/m/Y', $request->date)->format('Y-m-d');
        
            Sanction::create([
            'classe_id' => $request->classe_id,
            'etudiant_id' => $et,
            'cour_id' => $request->cour_id,
            'type' =>$request->type,
            'date' => $date,
            'annee_academique_id' => $request->annee
        ]);

        }

        return to_route('sanction.index')->with('success', 'Etudiant crée avec succe');
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
