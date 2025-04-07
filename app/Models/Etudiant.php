<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'matricule',
        'nom', 
        'prenom',
        'dateNaissance', 
        'lieuNaissance',
        'telephone1', 
        'telephone2',
        'photo'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function classes(){
        return $this->belongsToMany(Classe::class, 'classe_etudiant')
                            ->withPivot('annee_academique')
                            ->withTimestamps();
    }

   public function sanctions(){

    return $this->hasMany(Sanction::class);
   }
}
