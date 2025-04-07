<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourResource extends JsonResource
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
            'volume_horaire' =>$this->volume_horaire,
            'status' => $this->status,
            'classe' => $this->classes,
            'enseignant' => $this->enseignant,
            'semestre' => $this->semestre,
            'ressources' => $this->ressources
        ];
    }
}
