<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use App\Http\Resources\RoleResource;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Role::query();
        $roles = $query->paginate(10)->onEachSide(1); 
       return Inertia::render('Admin/Role/Index',[
        'roles' => RoleResource::collection($roles),
        'success' => session('success')
       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Role/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        $data = $request->validated();
        Role::create($data);

        return to_route('role.index')->with('success', 'role enregistré avec succès');
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
    public function edit(Role $role)
    {
        
        return Inertia::render("Admin/Role/Edit",[
            'role' => new RoleResource($role)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update($request->validated());
        return to_route('role.index')->with('success', 'role modifié avec succès');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $nom = $role->nom_role;
        $role->delete();
        return to_route('role.index')->with('success', "role \"$nom\" supprime");
    }
}