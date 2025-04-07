<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "nom" => $this->nom,
            "prenom" => $this->prenom,
            "matricule" => $this->matricule,
            "telephone1" => $this->telephone1,
            "telephone2" => $this->telephone2,
            "dateNaissance" => $this->dateNaissance,
            "lieu_naissance" => $this->lieu_naissance,
            "classe" => $this->classe,
            "grade" => $this->grade,
            "email" => $this->email,
            "status" => $this->status,
            "role" =>$this->role,
           

        ]
        ;
    }
}
