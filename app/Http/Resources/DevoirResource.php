<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DevoirResource extends JsonResource
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
            'classe' => $this->classes,
            'cour' => $this->cour,
            'date_limite' => $this->date_limite
        ];
    }
}
