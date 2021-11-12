import { Component, OnInit } from '@angular/core';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';
import { SignUpService } from 'src/app/services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public block_active : string = "personnel";//connection

  //Getters
  get form(){return this.form_group_sign_up_service.form_sign_up;}
  get first_name(){return this.form.controls.first_name;}
  get last_name(){return this.form.controls.last_name;}
  get email(){return this.form.controls.email;}
  get password(){return this.form.controls.password;}
  get password_confirmation(){return this.form.controls.password_confirmation;}
  get subscriber(){return this.form.controls.subscriber;}

  constructor(
                private form_group_sign_up_service : FormGroupSignUpService,
                private sign_up_service: SignUpService
              ){}

  ngOnInit(): void {}


  public on_submit()
  {
      this.sign_up_service.sign_up(this.form.value).subscribe(
        response => console.log(`response: ${response}`),
        erreur => console.log(`erreur: ${erreur}`)
      );
  }

  public change_input_status(input: string, is_valid: boolean)
  {
      this.form_group_sign_up_service.inputs_valids_subject.next({[input]: is_valid});
  }


}
