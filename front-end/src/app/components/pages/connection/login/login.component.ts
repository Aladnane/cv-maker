import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection/connection.service';
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
    private connection_component: ConnectionComponent
    )
  {
      this.form = form_builder.group({
        "email": ["", [Validators.required, Validators.pattern]],
        "password": ["", [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      });

      this.connection_service.type.next("Login");
      this.connection_component.initialize_inputs_valids();
  }

  ngOnInit(): void { }


  public on_submit() {
    this.connection_service.login(this.form);
  }
}
