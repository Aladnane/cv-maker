import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormGroupSignUpService
{
  public form_sign_up: FormGroup;
  public inputs_valids_subject = new Subject();//BehaviorSubject<{[key: string]: boolean}>({"": false});
  public inputs_valids = this.inputs_valids_subject.asObservable();

  constructor(private form_builder: FormBuilder)
  {
      this.form_sign_up = this.initialiserForm();
  }

  private initialiserForm(): FormGroup
  {
    return this.form_builder.group({
      "first_name": ["younes", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "last_name": ["adnane", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      "email": ["younes@adnane.com", [Validators.required, Validators.pattern]],
      "password": ["12345678", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "password_confirmation": ["12345678", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      "subscriber": [true],
    });
  }
}
