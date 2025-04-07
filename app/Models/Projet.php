<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    protected $fillable = ['intitule','fichier','chemin','cour_id', 'date_limite'];

    public function classes(){
        return $this->belongsToMany(Classe::class)
                    ->withTimestamps();
    }

    public function cour(){

        return $this->belongsTo(Cour::class);
    }
}
