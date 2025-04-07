<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        
        'email', 
        'password',
        'role_id', 
        'status', 
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function etudiant(){
        return $this->hasOne(Etudiant::class);
    }

    public function enseignant(){
        return $this->hasOne(Enseignant::class);
    }

    public function personnel(){
        return $this->hasOne(Personnel::class);
    }

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function hasRole($role){
        return $this->role()->where('nom_role', $role)->first() !== null;
    }
}
