<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanction extends Model
{
    protected $fillable = ['classe_id','etudiant_id', 'cour_id', 'type', 'date', 'annee_academique_id'];

    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class);
    }
    public function classe(){
        return $this->belongsTo(Classe::class);
    }
    public function cour()
    {
        return $this->belongsTo(Cour::class);
    }

    public function anneeAcademique()
    {
        return $this->belongsTo(AnneeAcademique::class);
    }
}
