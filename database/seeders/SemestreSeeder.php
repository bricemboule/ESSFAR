<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Semestre;

class SemestreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $semestre = ['Semestre 1', 'Semestre 2'];

        foreach ($semestre as $sem){
            Semestre::create([
                'libelle' => $sem
            ]);
        }
    }
}
