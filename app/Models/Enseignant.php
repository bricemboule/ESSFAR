<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enseignant extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'nom', 
        'prenom',
        'dateNaissance', 
        'lieuNaissance',
        'grade',
        'telephone1', 
        'telephone2', 
    ];
    
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function cours(){
        return $this->hasMany(Cour::class);
    }
}
