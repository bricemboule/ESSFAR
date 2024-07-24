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
            'intitule' => $this->intutile,
            'volumeHoraire' => $this->volumeHoraire,
            'effectue' => $this->effectue,
            'restant' => $this->restant,
            'status' => $this->status,
            'enseignant' => $this->enseignant
        ];
    }
}
