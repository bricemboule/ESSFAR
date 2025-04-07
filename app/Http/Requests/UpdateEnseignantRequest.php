<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEnseignantRequest extends FormRequest
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
        $id_user = $this->route('enseignant.user_id');

        return [
            'nom' => 'required|regex:/^[a-zA-Z\s\-]+$/|min:2',
            'prenom' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-]+$/|min:3',
            'telephone1' => 'required|regex:/^(\+?[0-9\s\-\(\)]{10,20})$/',
            'telephone2' => 'nullable|regex:/^(\+?[0-9\s\-\(\)]{10,20})$/',
            'dateNaissance' => 'required|date',
            'lieuNaissance' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-Z0-9À-ÖØ-öø-ÿ\s\-]*$/|max:255',
            'email' => 'required|email|unique:users,email,' .$id_user,
            'grade' => 'required|string|max:255',
            //'num_cni' => 'required|regex:/^[0-9\s]+$/'
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
        
        'dateNaissance.required' => 'La date de naissance est obligatoire.',
        'dateNaissance.date' => 'Le format de la date de naissance est invalide.',
        'dateNaissance.before' => 'La date de naissance doit être dans le passé.',
        
        'lieuNaissance.required' => 'Le lieu de naissance est obligatoire.',
        'lieuNaissance.regex' => 'Le lieu de naissance doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',
        
        'email.required' => 'L\'adresse e-mail est obligatoire.',
        'email.email' => 'Le format de l\'adresse e-mail est invalide.',
        'email.unique' => 'Cette adresse e-mail est déjà utilisée.',
        
        'grade.required' => 'Le grade est obligatoire.',
        'grade.max' => 'Le grade ne peut pas dépasser 255 caractères.',
        
        //'num_cni.required' => 'Le numéro CNI est obligatoire.',
        //'num_cni.regex' => 'Le numéro CNI doit contenir uniquement des chiffres.',
    ];
}
}
