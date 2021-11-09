import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public block_active : string = "personnel";//connection
  
  get form(){return this.form_group_sign_up_service.form_sign_up;}
  get first_name(){return this.form_group_sign_up_service.form_sign_up.controls["first_name"];}

  constructor(public form_group_sign_up_service : FormGroupSignUpService) 
  {
      
  }

  ngOnInit(): void {}


  //test
  // showValue(event: string)
  // {
  //   console.log(event);
  // }


}
