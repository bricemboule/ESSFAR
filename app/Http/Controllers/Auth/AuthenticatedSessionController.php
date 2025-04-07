<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Personnel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        $user_role = Auth::user()->role->nom_role; 
     
        if($user_role == "personnel"){
            //$poste = Personnel::select('poste')->where('user_id', Auth::user()->id)->first();
            $poste = Auth::user()->personnel->poste;
        
            switch ($poste){
                case 'Admin' : 
                    return redirect()->intended(route('admin.dashboard', absolute: false));
                    break;
                case 'Chef Scolarite' :
                    
                    return redirect()->intended(route('scolarite.dashboard', absolute: false));
                    break;
                case 'Gestion Scolarite' :
                    return redirect()->intended(route('gestion.dashboard', absolute: false));
                    break;
                case 'Directeur General' :
                    return redirect()->intended(route('dg.dashboard', absolute: false));
                    break;
                case 'Directeur Academique' :
                    return redirect()->intended(route('dac.dashboard', absolute: false));
                    break;
                case 'Comptable' :
                    return redirect()->intended(route('compatabilite.dashboard', absolute: false));
                    break;
                default :
                    return redirect()->intended(route('dashboard', absolute: false));
             }
        }else{
            switch ($user_role){
                case "etudiant" :
                    
                    return redirect()->intended(route('etudiant.dashboard', absolute: false));
                    break;
                case "enseignant" :
                    return redirect()->intended(route('enseignant.dashboard', absolute: false));
                    break;
                default :
                    return redirect()->intended(route('dashboard', absolute: false));
                
            }
        }
       
       
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
