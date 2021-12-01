import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { FormService } from 'src/app/services/form/form.service';
import { ConnectionComponent } from '../layout/connection.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../layout/connection-block.scss',
    './login.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  //Getters
  public form: FormGroup;
  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }

  constructor(
    public connection_service: ConnectionService,
    private form_builder: FormBuilder,
    private connection_component: ConnectionComponent,
    private form_service: FormService
    )
  {
      this.form = this.form_builder.group({
        "email": ["email@email.test", [Validators.required, Validators.pattern]],
        "password": ["12345678", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      });

      this.connection_service.type.next("Login");
      this.connection_component.initialize_inputs_valids();
  }

  ngOnInit(): void { }


  public on_submit()
  {
    if(this.form.invalid)
    {
      this.form_service.validateAllFields(this.form);
      return;
    }
    this.connection_service.login(this.form);
  }
}
