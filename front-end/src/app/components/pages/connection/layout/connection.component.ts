import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  public connection_type: string = "";

  public inputs_valids: { [key: string]: boolean } = {};

  constructor(private connection_service: ConnectionService)
  {
    this.connection_service.inputs_valids.subscribe(input => {
      const input_name = Object.keys(input as object)[0];
      this.inputs_valids[input_name] = (input as { [key: string]: boolean })[input_name];
    });

    this.initialize_inputs_valids();
    this.connection_service.connection_type.subscribe(type => this.connection_type = type);
  }

  ngOnInit(): void {
  }

  public initialize_inputs_valids(): void
  {
      this.inputs_valids = {
        "first_name": false,
        "last_name": false,
        "email": false,
        "password": false,
        "password_confirmation": false,
        "subscriber": false
      };
  }

}
