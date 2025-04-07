<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAnneeRequest extends FormRequest
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
            "intitule"=>['required','min:5','regex:/^(20\d{2})-(20\d{2})$/'],
        ];
    }

    public function messages(): array
    {
        return [
            'intitule.required' => 'L\'intitulé est obligatoire.',
            'intitule.regex' => 'L\'intitulé n\'est pas au bon format.',
            'intitule.min' => 'L\'intitulé doit contenir au moins 2 caractères.',
            
           
        ];
    }
}
