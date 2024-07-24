<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesAndUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Création des rôles
        $role_admin = Role::create([
            'name' => 'admin',
            'description' => 'Administrateur du site',
        ]);

        $role_etudiant = Role::create([
            'name' => 'etudiant',
            'description' => 'Etudiant de l\'ecole',
        ]);
        $role_enseignant = Role::create([
            'name' => 'enseignant',
            'description' => 'Enseignant de l\'ecole',
        ]);

        // Création des utilisateurs
        $admin = User::create([
            'nom' => 'Admin',
            'prenom' => 'brice',
            'telephone1' => '693326522',
            'telephone2' => '676956536',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'status'=>'1',
            'role_id' => $role_admin->id,
        ]);

    }
}
