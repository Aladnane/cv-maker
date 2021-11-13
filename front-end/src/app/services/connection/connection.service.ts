import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService
{
  private server_url: string = "http://localhost:8000/api";
  private redirect_to: string = "/";

  //Connection Types (Login/Sign-Up)
  public type = new Subject<string>();
  public connection_type: Observable<string> = this.type.asObservable();

  //Fields Validation
  public inputs_valids_subject = new Subject();//BehaviorSubject<{[key: string]: boolean}>({"": false});
  public inputs_valids = this.inputs_valids_subject.asObservable();


  constructor(
                private http_client: HttpClient,
                private token_service: TokenService,
                private router: Router
              ) { }

  public sign_up(sign_up_form: FormGroup)
  {
      this.http_client.post(`${this.server_url}/sign-up`, sign_up_form.value).subscribe(
          response => {
            this.token_service.store((<any> response).access_token);
            this.router.navigate([this.redirect_to]);
            sign_up_form.reset();
          },
          error => alert("Error: "+JSON.stringify(error.error.errors))
        );
  }

  public login(login_form: FormGroup)
  {
      this.http_client.post(`${this.server_url}/login`, login_form.value).subscribe(
          response => {
              this.token_service.store((<any>response).access_token);
              this.router.navigate([this.redirect_to]);
              login_form.reset();
          },
          error => alert("Error: "+error.error.error)
      );
  }

  public change_input_status(input: string, is_valid: boolean) {
    this.inputs_valids_subject.next({ [input]: is_valid });
  }
}
