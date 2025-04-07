<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourRequest extends FormRequest
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
            'intitule' =>  'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-Z0-9À-ÖØ-öø-ÿ\s\-]*$/|max:255',
            'volume_horaire' => 'required|regex:/^\d+(,\d{2})?$/',
            'enseignant' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-Z0-9À-ÖØ-öø-ÿ\s]*$/|max:255',
            'semestre' => 'required|regex:/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-Z0-9À-ÖØ-öø-ÿ\s]*$/|max:255',
            'classes' => 'required|array', 
            //'classes.*.id' => 'required|integer|exists:classes,id', 
            //'classes.*.checked' => 'required|boolean',   
            
        ];
    }

    public function messages(){
        return [
            'intitule.required' => 'L intitulé est obligatoire.',
            'intitule.regex' => 'L intitulé doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',

            'volume_horaire.required' => 'Le volume horaire est obligatoire',
            'volume_horaire.regex' => 'Le volume horaire doit etre un decimal',

            'semestre.required' => 'Le semestre est obligatoire.',
            'semestre.regex' => 'Le semestre doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',
            
            'classes.required' => 'La liste des checkbox est obligatoire.',
            'classes.array' => 'Les checkbox doivent être envoyées sous forme de tableau.',
            'classes.*.id.required' => 'Chaque checkbox doit avoir un identifiant.',
            'classes.*.id.exists' => 'L\’identifiant de la checkbox est invalide.',
            'classes.*.checked.required' => 'Le champ checked est requis pour chaque checkbox.',
            'classes.*.checked.boolean' => 'Le champ checked doit être vrai ou faux.',
        ];
    }
}
