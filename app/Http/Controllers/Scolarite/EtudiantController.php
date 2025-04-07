<?php

namespace App\Http\Controllers\Scolarite;

use App\Models\User;
use App\Models\Role;
use App\Models\Code;
use App\Models\Classe;
use App\Models\Etudiant;
use App\Models\AnneeAcademique;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\ClasseResource;
use App\Http\Requests\StoreEtudiantRequest;
use App\Http\Requests\UpdateEtudiantRequest;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Etudiant::query()
        ->join('users', 'etudiants.user_id', '=', 'users.id')
        ->join('classe_etudiant', 'etudiants.id', '=', 'classe_etudiant.etudiant_id');

        $sortField = request("sort_field",'nom');
        $sortDirection = request("sort_direction", "asc");
        if(request("nom")){
            $query->where("nom", "like","%".request("nom")."%");
        }
       
        if(request("matricule")){
            $query->where("matricule","like","%".request("matricule")."%");
        }

        if(request("telephone1")){
            $query->where("telephone1","like","%".request("telephone1")."%");
        }

        if (request('classe')) {
            $query->where("classe_etudiant.classe_id", request('classe'));
        }
    
        if (request('email')) {
            $query->where("users.email", "like", "%" .request('email') . "%");
        }

        $etudiant = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
        $classes = Classe::all();
        return Inertia::render('Scolarite/Etudiant/Index',[
            'etudiants' => EtudiantResource::collection($etudiant),
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
   
        return Inertia::render('Scolarite/Etudiant/Create',[
        'classes' => ClasseResource::collection($classes)]
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEtudiantRequest $request)
    {
    
        $data = $request->validated();
        
        $role = Role::where('nom_role', 'etudiant')->first();
        $annee_academique = AnneeAcademique::where('status', 'activée')->first();
        $classe = Classe::where('intitule', $request->classe)->first();

        
        $code = Code::latest()->first();
        
        $day = substr($data['dateNaissance'], 8, 2); // Jour
        $month = substr($data['dateNaissance'], 5, 2); // Mois
        $year = substr($data['dateNaissance'], 2, 2); // Les deux premiers chiffres de l'année
      
        // Générer le matricule
        $matricule = $day . $month . $year  . $code->valeur;
        
        $user =  User::create([
            'email' => $data['email'],
            'role_id'=>$role->id
        ]);

       $etudiant = Etudiant::create([
            'nom'=>$data['nom'],
            'prenom' => $data['prenom'],
            'telephone1' => $data['telephone1'],
            'telephone2' => $data['telephone2'],
            'dateNaissance' => $data['dateNaissance'],
            'lieuNaissance' => $data['lieuNaissance'],
            'matricule' => $matricule,
            'user_id' => $user->id
        ]);

        $etudiant->classes()->attach($classe->id, ['annee_academique' =>$annee_academique->intitule]);
        $code->valeur += 1;
        Code::create(['valeur'=>$code->valeur]);
        return to_route('etudiant.index')->with('success', 'Etudiant crée avec succe');

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
    public function edit(Etudiant $etudiant)
    {
        $classes = Classe::all();
        return Inertia::render('Scolarite/Etudiant/Edit',[
            'etudiant' => new EtudiantResource($etudiant),
            'classes' => ClasseResource::collection($classes)
         ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEtudiantRequest $request, Etudiant $etudiant)
    {
        
        
        $annee_academique = AnneeAcademique::where('status', 'active')->first();
        //dd($annee_academique);
        $classe = Classe::where('intitule', $request->classe)->first();

// Vérifications des données
dd($classe);
if (!$annee_academique || !$classe) {
    
    return back()->withErrors(['message' => 'Données invalides pour la classe ou l\'année académique.']);
}

dd("bonsj");
// Mise à jour de l'étudiant
$etudiant->update($request->validated());

$etudiant->classes()->detach();

$etudiant->classes()->attach($classe->id, [
        'annee_academique' => $annee_academique->intitule,
    ]);


        return to_route('etudiant.index')->with('success', "Etudiant \"$etudiant->nom\" modifié");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etudiant $etudiant)
    {
        $etudiant->delete();

        return to_route('etudiant.index')->with('success', "Etudiant \"$etudiant->nom\"supprimé");
    }
}
