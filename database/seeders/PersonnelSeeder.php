<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Personnel;

class PersonnelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();

        Personnel::create([
            'user_id' => $user->id,
            'nom' => 'Mboule',
            'prenom' => 'Brice',
            'telephone1' => '693326522',
            'telephone2' => '676956536',
            'photo' => '',
            'poste' => 'Admin'
        ]
    );
    }
}
