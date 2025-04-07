<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResourceResource extends JsonResource
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
            'intitule' => $this->intitule,
            'fichier' => $this->fichier,
            'chemin' => $this->chemin,
            'type' => $this->type_ressource,
            'annee' => $this->annee_academique,
            'classe' => $this->classes,
            'type' => $this->type_ressource,
            'cour' => $this->cour
        ];
    }
}
