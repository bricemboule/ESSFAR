<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::where('nom_role', 'personnel')->first();

        User::create([
            'email'=> 'bricemboule9@gmail.com',
            'password' =>Hash::make('123456789'),
            'role_id' => $role->id
        ]);
    }
}
