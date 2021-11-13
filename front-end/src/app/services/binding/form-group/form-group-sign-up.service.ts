import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

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
      "first_name": ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "last_name": ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "email": ["", [Validators.required, Validators.pattern]],
      "password": ["", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "password_confirmation": ["", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "subscriber": [],
    });
  }
}
