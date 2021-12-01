import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { password_match_validator } from 'src/app/validators/password-match-validator';

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
      "first_name": ["Younes", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "last_name": ["Adnane", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "email": ["younes@adnane.com", [Validators.required, Validators.pattern]],
      "password": ["12345678", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "password_confirmation": ["12345678", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "subscriber": [false],
    }, {validators: password_match_validator});
  }
}
