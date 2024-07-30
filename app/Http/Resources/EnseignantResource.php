<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EnseignantResource extends JsonResource
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
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'dateNaissance' => $this->dateNaissance,
            'lieu_naissance' => $this->lieu_naissance,
            'telephone1' => $this->telephone1,
            'telephone2' => $this->telephone2,
            'email' => $this->email,
            'grade' => $this->grade,
            'status' => $this->status
        ]; ;
    }
}
