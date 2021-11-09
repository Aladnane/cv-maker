import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupSignUpService 
{
  public form_sign_up: FormGroup;

  constructor(private form_builder: FormBuilder)
  {
      this.form_sign_up = this.initialiserForm();
  }

  private initialiserForm(): FormGroup
  {
    return this.form_builder.group({
      "first_name": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "last_name": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "email": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "password": [""],
      "password_confirmation": [""],
      "subscriber": [""],
    });
  }
}
