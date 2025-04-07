<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreResourceRequest extends FormRequest
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
            'intitule' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-Z0-9À-ÖØ-öø-ÿ\s\-]*$/|max:255',
            'type' => 'required',
            'annee' => 'required',
            'cour' => 'required',
            'ressource' =>'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
            'classes' => 'required|array'
        ];
    }

    public function messages(): array
    {
        return [
        
            'intitule.required' => 'Le fichier est obligatoire.',
            'ressource.file' => 'Le fichier doit être valide.',
            'ressource.mimes' => 'Le fichier doit être au format jpg, jpeg, png ou pdf.',
            'ressource.max' => 'Le fichier ne doit pas dépasser 2 Mo.',
            'ressource.regex' => 'L intitulée doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',

            'classe.required' => 'La classe est obligatoire',
            'classe.array' => 'Les valeurs doivent etre dans un tableau',

            'cour.required' => 'Le cours est obligatoire.',
            'annee.required' => 'L année est obligatoire.',
            'type.required' => 'Le type est obligatoire.',
            'ressource.required' => 'La ressource est obligatoire.',
            'classes.required' => 'La liste des checkbox est obligatoire.',
            'classes.array' => 'Les checkbox doivent être envoyées sous forme de tableau.',
        ];
    }
}
