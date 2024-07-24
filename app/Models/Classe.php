<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;
    public function documents(){
        return $this->hasMany(Document::class);
    }

    public function etudiants(){
        return $this->hasMany(Classe::class);
    }
}
