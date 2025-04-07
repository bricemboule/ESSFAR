<?php

namespace App\Http\Controllers\Scolarite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;
use App\Http\Resources\CourResource;
use App\Http\Resources\ClasseResource;
use App\Http\Resources\EnseignantResource;
use App\Http\Resources\AnneeAcademiqueResource;
use App\Http\Resources\SemestreResource;
use App\Models\Cour;
use App\Models\Classe;
use App\Models\Enseignant;
use App\Models\Semestre;

use App\Models\AnneeAcademique;
use Inertia\Inertia;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //dd(Cour::all());
        $query = Cour::query()
                    ->join('enseignants', 'cours.enseignant_id', '=', 'enseignants.id')
                    ->join('semestres', 'cours.semestre_id', '=', 'semestres.id')
                    ->join('classe_cour', 'cours.id', '=', 'classe_cour.cour_id')
                    ->select('cours.*')
                    ->distinct();

                    
        $sortField = request("sort_field",'intitule');
        $sortDirection = request("sort_direction", "asc");
        if(request("intitule")){
            $query->where("intitule", "like","%".request("intitule")."%");
        }
        if(request("nom")){
            $query->where("nom", "like","%".request("nom")."%");
        }
        if(request("semestre")){
            $query->where("libelle", "like","%".request("semestre")."%");
        }

        if(request("classe")){
            $query->where("intitule", request("classe"));
        }


        $cours = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    
        $classes = Classe::all();
        $semestres = Semestre::all();
        $annees = AnneeAcademique::all();
        return Inertia::render('Scolarite/Cour/Index',[
            'cours' => CourResource::collection($cours),
            'semestres' => SemestreResource::collection($semestres),
            'annees' => AnneeAcademiqueResource::collection($annees),
            'classes' => ClasseResource::collection($classes),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classe::all();
        $semestres = Semestre::all();
        $annees = AnneeAcademique::all();
       
        $enseignant = Enseignant::all();
        return Inertia::render('Scolarite/Cour/Create',[
        'classes' => ClasseResource::collection($classes),
        'enseignants' => EnseignantResource::collection($enseignant),
        'annees' => AnneeAcademiqueResource::collection($annees),
        'semestres' => SemestreResource::collection($semestres)
        ]
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourRequest $request)
    {
        
        $data = $request->validated();
        $nom_prenom = explode(" ", $data['enseignant']);
        
        $enseignant = Enseignant::where('nom', $nom_prenom[0])->first();
        $semestre = Semestre::where('libelle', $data['semestre'])->first();
        
        $cour = Cour::create([
            'intitule' => $data['intitule'],
            'volume_horaire' => $data['volume_horaire'],
            'enseignant_id' => $enseignant->id,
            'semestre_id' => $semestre->id
        ]);

        $cour->classes()->attach($data['classes']
        );

        return to_route('cour.index')->with('success', 'Cour crée avec succe'); 
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
