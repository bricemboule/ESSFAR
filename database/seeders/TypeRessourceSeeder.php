<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TypeRessource;

class TypeRessourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ressources = ['Devoir', 'Devoir Surveillé','Projet', 'Session Normale', 'Session Rattrapage'];

        foreach($ressources as $res){
            TypeRessource::create(['intitule' => $res]);
        }
    }
}
