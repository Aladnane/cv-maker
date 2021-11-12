<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserSignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "first_name"=>"required|string|min:3|max:15",
            "last_name"=>"required|string|min:3|max:15",
            "email"=>"required|email|max:100|unique:App\Models\User,email",
            "password"=>"required|string|min:8|max:100|confirmed",
            "password_confirmation"=>"required|string|min:8|max:100",
            //"subscriber"=>"boolean"
        ];
    }
}
