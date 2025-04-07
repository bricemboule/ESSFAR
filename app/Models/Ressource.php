<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ressource extends Model
{
    use HasFactory;
    protected $fillable = ['intitule','fichier','chemin', 'annee_academique_id','cour_id', 'type_ressource_id'];

    public function type_ressource(){
        return $this->belongsTo(TypeRessource::class);
    }

    public function classes(){
        return $this->belongsToMany(Classe::class)
                    ->withTimestamps();
    }

    public function cour(){

        return $this->belongsTo(Cour::class);
    }

    public function annee_academique(){

        return $this->belongsTo(AnneeAcademique::class);
    }

}
