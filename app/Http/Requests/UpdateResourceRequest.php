<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResourceRequest extends FormRequest
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
            'classes' => 'required|array',
            'classes.*' => 'exists:classes,id',
        ];
    }

    public function messages(): array
    {
        return [
        
            'intitule.required' => 'L intitulée est obligatoire.',
            'intitule.regex' => 'L intitulée doit commencer par une lettre et peut inclure des chiffres, des espaces et des tirets.',

            'classe.required' => 'La classe est obligatoire',
            'classe.array' => 'Les valeurs doivent etre dans un tableau'
        ];
    }
}
