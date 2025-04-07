<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cycle;

class CycleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cycles = ['Licence', 'Master'];

        foreach($cycles as $cycle){
            Cycle::create(['intitule' => $cycle]);
        }
    }
}
