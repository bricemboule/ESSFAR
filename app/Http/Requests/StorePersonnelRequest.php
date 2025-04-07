<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePersonnelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|regex:/^[a-zA-Z\s\-]+$/|min:2',
            'prenom' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-]+$/|min:3',
            'telephone1' => 'required|regex:/^(\+?[0-9\s\-\(\)]{9,20})$/',
            'telephone2' => 'nullable|regex:/^(\+?[0-9\s\-\(\)]{9,20})$/',
            
            'email' => 'required|email|unique:users,email',
            'poste' => 'required|string|max:255',
            
        ];
    }

    public function messages(): array
{
    return [
        'nom.required' => 'Le champ nom est obligatoire.',
        'nom.regex' => 'Le champ nom ne peut contenir que des lettres, des espaces et des tirets.',
        'nom.min' => 'Le nom doit contenir au moins 2 caractères.',
        
        'prenom.required' => 'Le champ prénom est obligatoire.',
        'prenom.regex' => 'Le champ prénom ne peut contenir que des lettres, des espaces et des tirets.',
        'prenom.min' => 'Le prenom doit contenir au moins 3 caractères.',

        'telephone1.required' => 'Le premier numéro de téléphone est obligatoire.',
        'telephone1.regex' => 'Le format du numéro de téléphone est invalide.',
        
        'telephone2.regex' => 'Le format du second numéro de téléphone est invalide.',
        
        
        
        'email.required' => 'L\'adresse e-mail est obligatoire.',
        'email.email' => 'Le format de l\'adresse e-mail est invalide.',
        'email.unique' => 'Cette adresse e-mail est déjà utilisée.',
        
        'poste.required' => 'Le poste est obligatoire.',
        'poste.max' => 'Le poste ne peut pas dépasser 255 caractères.',
        
        
    ];
}
}
