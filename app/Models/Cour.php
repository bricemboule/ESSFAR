<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cour extends Model
{
    use HasFactory;

    protected $fillable = ['intitule', 'volume_horaire', 'status','enseignant_id','semestre_id'];

    public function enseignant(){
        return $this->belongsTo(Enseignant::class);
    }

    public function classes(){
        return $this->belongsToMany(Classe::class)
                    ->withTimestamps();                           
    }

    public function semestre(){
        return $this->belongsTo(Semestre::class);
    }

    public function ressources(){
        return $this->hasMany(Ressource::class);
    }

    public function projets(){

        return $this->hasMany(Projet::class);
    }

    public function devoirs(){
        return $this->hasMany(Devoir::class);
    }

    public function sanctions(){

        return $this->hasMany(Santion::class);
    }
}
