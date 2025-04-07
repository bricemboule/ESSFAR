<?php

namespace App\Http\Controllers\Admin;

use App\Models\Personnel;
use App\Models\User;
use App\Models\Role;
use App\Http\Resources\PersonnelResource;
use App\Http\Resources\RoleResource;
use App\Http\Requests\StorePersonnelRequest;
use App\Http\Requests\UpdatePersonnelRequest;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class PersonnelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Personnel::query();
        //dd($query);
       
        //$sortDirection = request("sort_direction", "asc");
        if(request("name")){
            $query->where("nom", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $users = $query->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/Personnel/Index',[
            'personnels' => PersonnelResource::collection($users),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Personnel/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonnelRequest $request)
    {
        $data = $request->validated();
        $role = Role::where('nom_role', 'personnel')->first();
        
       $user =  User::create([
            'email' => $data['email'],
            'role_id'=>$role->id
        ]);

        Personnel::create([
            'nom'=>$data['nom'],
            'prenom' => $data['prenom'],
            'telephone1' => $data['telephone1'],
            'telephone2' => $data['telephone2'],
            'poste' => $data['poste'],
            'user_id' => $user->id
        ]);
        
        return to_route('personnel.index')->with('success', 'personnel crée avec succe');

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
    public function edit(Personnel $personnel)
    {
        return Inertia::render('Admin/Personnel/Edit',[
            'personnel' => new PersonnelResource($personnel)
        ]
        
    );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonnelRequest $request, Personnel $personnel)
    {
        $personnel->update($request->validated());

        return to_route('personnel.index')->with('success', "Personnel \"$personnel->nom\"supprime avec succes");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Personnel $personnel)
    {
        $nom = $personnel->nom;
        $personnel->delete();

        return to_route('personnel.index')->with('success', "Personnel \"$nom\" suprimé avec succes");

    }
}
