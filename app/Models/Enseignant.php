<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enseignant extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom', 'prenom','telephone1', 'telephone2', 'email','grade','dateNaissance', 'lieu_naissance','status'
    ];
    public function cours(){
        return $this->hasMany(Cour::class);
    }
}
