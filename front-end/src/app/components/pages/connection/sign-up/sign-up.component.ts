import { Component, OnInit } from '@angular/core';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public block_active : string = "personnel";//connection

  //Getters
  get form(){return this.form_group_sign_up_service.form_sign_up;}
  get first_name(){return this.form_group_sign_up_service.form_sign_up.controls["first_name"];}

  constructor(public form_group_sign_up_service : FormGroupSignUpService){}

  ngOnInit(): void {}


  public on_submit()
  {
    console.log(this.form);
  }

  public change_input_status(input: string, is_valid: boolean)
  {
      // this.inputs_valids[input] = is_valid;
      this.form_group_sign_up_service.inputs_valids_subject.next({first_name: is_valid});
  }


}
