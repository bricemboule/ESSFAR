<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use App\Http\Resources\UserResource;
use App\Http\Resources\RoleResource;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();
        $sortField = request("sort_field",'email');
        $sortDirection = request("sort_direction", "desc");
        if(request("name")){
            $query->where("nom", "like","%".request("name")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $users = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/User/Index',[
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        
        return Inertia::render("Admin/User/Create", [
            'roles' => RoleResource::collection($roles)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
       
        $data = $request->validated();
        
        $role = Role::where('nom_role', $request->role)->first();
      
        $data['role_id'] = $role->id;
      
        User::create($data);

        return to_route('user.index')->with('success', 'Personnel créé avec succès');

      
        
        
        
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
    
        $roles = Role::all();
        return Inertia::render("Admin/User/Edit",[
            'user' => new UserResource($user),
            'roles' => RoleResource::collection($roles)
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
       
        $user->update($request->validated());
        return to_route('user.index')->with('success', 'Personnel modifié avec succès');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $nom = $user->nom;
        $user->delete();
        return to_route('user.index')->with('success', "Personnel \"$nom\" supprime");
    }
}
