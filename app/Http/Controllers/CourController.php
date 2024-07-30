<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use App\Http\Resources\CourResource;
use App\Http\Resources\EnseignantResource;
use App\Models\Enseignant;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;
use Inertia\Inertia;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Cours::query();
      
        $sortDirection = request("sort_direction", "asc");
        if(request("intitule")){
            $query->where("intitule", "like","%".request("intitule")."%");
        }
       
        if(request("status")){
            $query->where("status",request("status"));
        }

        $cours = $query->orderBy($sortDirection)->paginate(10)->onEachSide(1);
        
    
        return Inertia::render('Admin/Cour/Index',[
            'cours' => CourResource::collection($cours),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $enseignants = Enseignant::all();
       
        return Inertia::render('Admin/Cour/Create',[
            'enseignants' => EnseignantResource::collection($enseignants)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cour $cour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cour $cour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourRequest $request, Cour $cour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cour $cour)
    {
        //
    }
}
