import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupSignUpService } from 'src/app/services/binding/form-group/form-group-sign-up.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { ConnectionComponent } from '../layout/connection.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    '../layout/connection-block.scss',
    './sign-up.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  public block_active: string = "personnel";//connection

  //Getters
  get form() { return this.form_group_sign_up_service.form_sign_up; }
  get first_name() { return this.form.controls.first_name; }
  get last_name() { return this.form.controls.last_name; }
  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }
  get password_confirmation() { return this.form.controls.password_confirmation; }
  get subscriber() { return this.form.controls.subscriber; }

  constructor(
    private form_group_sign_up_service: FormGroupSignUpService,
    public connection_service: ConnectionService,
    private connection_component: ConnectionComponent
  )
  {
    this.connection_service.type.next("Sign-up");
    this.connection_component.initialize_inputs_valids();
  }

  ngOnInit(): void { }


  public on_submit()
  {
    if(this.form.invalid)
    {
      this.validateAllFields(this.form);
      return;
    }
    this.connection_service.sign_up(this.form);
  }

  validateAllFields(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl)
        {
            control.markAsTouched({ onlySelf: true });
        }
        else if (control instanceof FormGroup)
        {
            this.validateAllFields(control);
        }
    });
}

}
