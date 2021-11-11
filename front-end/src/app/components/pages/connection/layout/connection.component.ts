import { Component, OnInit } from '@angular/core';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit
{
  public inputs_valids : {[key: string] : boolean} = {
    "first_name": false,
    "last_name": false,
    "email": false,
    "password": false,
    "password_confirmation": false,
    "subscriber": false
  };

  constructor(private form_group_sign_up_service: FormGroupSignUpService)
  {
      this.form_group_sign_up_service.inputs_valids.subscribe(input => {

        const input_name = Object.keys(input as object)[0];

        this.inputs_valids[input_name] = (input as {[key: string]: boolean})[input_name];
      })
  }

  ngOnInit(): void
  {
  }

}
