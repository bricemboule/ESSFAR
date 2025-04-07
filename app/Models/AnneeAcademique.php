<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnneeAcademique extends Model
{
    use HasFactory;

    protected $fillable=['intitule', 'status'];

    public function ressources(){

        return $this->hasMany(Ressource::class);
    }
}
