<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
    use HasFactory;
    protected $fillable =['intitule'];

    public function classes(){

        return $this->hasMany(Classe::class);
    }
}
