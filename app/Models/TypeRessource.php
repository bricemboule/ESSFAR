<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeRessource extends Model
{
    use HasFactory;

    protected $fillable = [
        'intitule'
    ];

    public function ressources(){
        return $this->hasMany(Ressource::class);
    } 
}
