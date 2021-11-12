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
      "first_name": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "last_name": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "email": ["", [Validators.required, Validators.minLength, Validators.maxLength, Validators.pattern]],
      "password": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "password_confirmation": ["", [Validators.required, Validators.minLength, Validators.maxLength]],
      "subscriber": [""],
    });
  }
}
