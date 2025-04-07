<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Role;
use App\Models\Classe;
use App\Models\Etudiant;
use App\Models\Code;
use App\Models\AnneeAcademique;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\ClasseResource;
use App\Http\Requests\StoreEtudiantRequest;
use App\Http\Requests\UpdateEtudiantRequest;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function import(Request $request){
       
        dd($request->all(), $request->file('file'));
        if ($request->hasFile('file')) {
            dd("Fichier reçu :", $request->file('file'));
        } else {
            dd("Aucun fichier reçu !");
        }
        dd($request);
        if (!$request->hasFile('file')) {
            return back()->with('error', 'Aucun fichier sélectionné.');
        }
        
        $request->validate([
            'file' => 'required|mimes:xlsx,csv',
        ]);

        
        $file = $request->file('file');
        $handle = fopen($file->getPathname(), 'r');
        $hearder = true;

        while (($row = fgetcsv($handle, 1000, ',')) !== false) {
            if ($header) {
                $header = false; // Ignorer la première ligne (titres des colonnes)
                continue;
            }

            $role = Role::where('nom_role', 'etudiant')->first();
            $annee_academique = AnneeAcademique::where('status', 'active')->first();
            $classe = Classe::where('intitule', $row[8])->first();
    
            
        
            $code = Code::latest()->first();
            $day = substr($data['dateNaissance'], 8, 2); // Jour
            $month = substr($data['dateNaissance'], 5, 2); // Mois
            $year = substr($data['dateNaissance'], 2, 2); // Les deux premiers chiffres de l'année
          
            // Générer le matricule
            $matricule = $day . $month . $year  . $code;
            
            $user =  User::create([
                'email' => $row[6],
                'role_id'=>$role->id
            ]);
    
           $etudiant = Etudiant::create([
                'nom'=>$row[0],
                'prenom' => $row[1],
                'telephone1' => $row[2],
                'telephone2' => $row[3],
                'dateNaissance' => $row[4],
                'lieuNaissance' => $row[5],
                'matricule' => $matricule,
                'user_id' => $user->id
            ]);
    
            $etudiant->classes()->attach($classe->id, ['annee_academique' =>$annee_academique->intitule]);
            $code += 1;
            Code::create(['valeur'=> $code]);
            return to_route('etudiant.index')->with('success', 'Etudiant crée avec succe');
        }
     }
    public function index()
    {
        $query = Etudiant::query();
        $sortField = request("sort_field",'nom');
        $sortDirection = request("sort_direction", "asc");
        if(request("name")){
            $query->where("nom", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $etudiant = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/Etudiant/Index',[
            'etudiants' => EtudiantResource::collection($etudiant),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classe::all();
   
        return Inertia::render('Admin/Etudiant/Create',[
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
        $annee_academique = AnneeAcademique::where('status', 'active')->first();
        $classe = Classe::where('intitule', $request->classe)->first();

        
        $code = 23138;
        $day = substr($data['dateNaissance'], 8, 2); // Jour
        $month = substr($data['dateNaissance'], 5, 2); // Mois
        $year = substr($data['dateNaissance'], 2, 2); // Les deux premiers chiffres de l'année
      
        // Générer le matricule
        $matricule = $day . $month . $year  . $code;
        
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
        $code += 1;
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
        return Inertia::render('Admin/Etudiant/Edit',[
            'etudiant' => new EtudiantResource($etudiant),
            'classes' => ClasseResource::collection($classes)
         ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEtudiantRequest $request, Etudiant $etudiant)
    {
        
        $etudiant->update($request->validated());

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
