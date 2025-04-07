<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;
    protected $fillable = [
        'intitule','specialite', 'cycle_id','status'
    ];

    public function ressources(){
        return $this->belongsToMany(Ressource::class)
                    ->withTimestamps();
    }

    public function cycle(){
        return $this->belongsTo(Cycle::class);
    }

    public function sanctions(){
        return $this->hasMany(Santion::class);
    }
    
    public function etudiants(){
        return $this->belongsToMany(Etudiant::class, 'classe_etudiant')
                            ->withPivot('annee_academique')
                            ->withTimestamps();
    }

    public function cours(){
        return $this->belongsToMany(Cour::class); 
    }

    public function projets(){
        return $this->belongsToMany(Projet::class)
                    ->withTimestamps();
    }
    
    public function devoirs(){
        return $this->belongsToMany(Devoir::class)
                    ->withTimestamps();
    }

}
