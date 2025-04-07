<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCourRequest extends FormRequest
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
            'volume_horaire' => 'required|regex:/^\d+(,\d+)?$',
          
            
        ];
    }

    public function messages(){
        return [
            'intitule.required' => 'L intitulé est obligatoire.',
            'intitule.regex' => 'L intitulé doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',

            'volume_horaire.required' => 'Le volume horaire est obligatoire',
            'volume_horaire.regex' => 'Le volume horaire doit etre un decimal'
        ];
    }
}
