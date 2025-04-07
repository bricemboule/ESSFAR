<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cycle;
use App\Models\Classe;

class ClasseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //$cycleLicence = Cycle::where('intitule', 'Licence')->first();
        //$cycleMaster = Cycle::where('intitule', 'Master')->first();

        $classes1 = ['Licence 1', 'Licence 2','Licence 3'];
        $classes2 = ['Master 1', 'Master 2'];

        $specialites = ['Actuariat', 'Ingénier Financière', 'Statistiques et Big Data'];

        foreach( $classes1 as $cl){
            Classe::create([
                'intitule' => $cl,
                'cycle' => 'Licence',
                'specialite' => ''
            ]);
        }

        foreach( $classes2 as $cl){
            
            foreach ($specialites as  $spec){
                Classe::create([
                    'intitule' => $cl,
                    'cycle' =>'Master',
                    'specialite' => $spec 
                ]);
            }
        }

    }
}
