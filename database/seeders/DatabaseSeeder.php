<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       
         // Création des rôles
         $role_admin = Role::create([
            'nom_role' => 'admin',
            'description' => 'Administrateur du site',
            'status' => true
        ]);

        $role_etudiant = Role::create([
            'nom_role' => 'etudiant',
            'description' => 'Etudiant de l\'ecole',
            'status' => true
        ]);
        $role_enseignant = Role::create([
            'nom_role' => 'enseignant',
            'description' => 'Enseignant de l\'ecole',
            'status' => true
        ]);

        // Création des utilisateurs
        $admin = User::create([
            'nom' => 'Admin',
            'prenom' => 'brice',
            'telephone1' => '693326522',
            'telephone2' => '676956536',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'status' => true,
            'role_id' => $role_admin->id,
        ]);
        
    }
}
