<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // Vérifiez si l'utilisateur est authentifié
        if (!Auth::check()) {
            return redirect()->route('login');
        }
    
        $user = Auth::user();
        $user_role = $user->role->nom_role;
    
        // Gestion des rôles pour le personnel
        if ($user_role == "personnel") {
            $poste = $user->personnel->poste;
    
            // Vérifiez si le rôle correspond au poste
            if ($poste === $role) {
                return $next($request);
            }
    
            // Redirections basées sur le poste
            return match ($poste) {
                "Admin" => redirect()->route('admin.dashboard'),
                "Chef Scolarite" => redirect()->route('scolarite.dashboard'),
                default => redirect()->route('login'), // Fallback pour les postes inconnus
            };
        }
    
        // Gestion des rôles pour les autres utilisateurs
        if (in_array($user_role, ["etudiant", "enseignant"])) {
            if ($user_role === $role) {
                return $next($request);
            }
    
            // Redirections basées sur le rôle
            return match ($user_role) {
                "etudiant" => redirect()->route('etudiant.dashboard'),
                "enseignant" => redirect()->route('enseignant.dashboard'),
                default => redirect()->route('login'), // Fallback pour les rôles inconnus
            };
        }
    
        // Si aucune condition n'est remplie, redirigez vers la page de connexion
        return redirect()->route('login');
    }
}
