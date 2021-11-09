import { Component, Input, OnInit } from '@angular/core';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string = "";
  @Input() is_checkbox: boolean = false;
  public value: string = "";

  get form(){return this.form_group_sign_up_service.form_sign_up;}


  constructor(public form_group_sign_up_service : FormGroupSignUpService) { }

  ngOnInit(): void {}

  public emitValue()
  {
      this.form.controls["first_name"].setValue(this.value);
  }

}
