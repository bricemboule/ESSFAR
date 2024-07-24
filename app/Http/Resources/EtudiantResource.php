<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EtudiantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
   
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'photo' => $this->photo,
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'dateNaissance' => $this->dateNaissance,
            'lieuNaissance' => $this->lieuNaissance,
            'telephone1' => $this->telephone1,
            'telephone2' => $this->telephone2,
            'email' => $this->email,
            'classe' => $this->classe,
            'status' => $this->status
        ];
    }
}
