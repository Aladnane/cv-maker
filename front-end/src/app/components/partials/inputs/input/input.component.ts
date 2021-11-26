import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {

  @Input() label: string = "";
  @Input() is_checkbox: boolean = false;
  @Input() inline: boolean = false;
  @Input() field: any;
  public value: string = "";
  get form() { return this.form_group_sign_up_service.form_sign_up; }
  get errors_list() {return this.field?.errors}
  get pasword_does_not_match()
  {
    return this.form.hasError("password_match") && this.form.get("password")?.dirty && this.form.get("password_confirmation")?.dirty;
  }


  constructor(public form_group_sign_up_service: FormGroupSignUpService) { }

  ngOnInit(): void{}

  public emitValue() {
    this.form.controls["first_name"].setValue(this.value);
  }

}
