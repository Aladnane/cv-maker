import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subject, Subscription } from "rxjs";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService implements OnDestroy
{
  private server_url: string = "http://localhost:8000/api";
  private redirect_to: string = "/";

  //Connection Types (Login/Sign-Up)
  public type = new Subject<string>();
  public connection_type: Observable<string> = this.type.asObservable();

  //Fields Validation
  public inputs_valids_subject = new Subject();//BehaviorSubject<{[key: string]: boolean}>({"": false});
  public inputs_valids = this.inputs_valids_subject.asObservable();

  //Subscription
  private subscriptio_sign_up : Subscription | undefined;
  private subscriptio_login : Subscription | undefined;

  constructor(
                private http_client: HttpClient,
                private token_service: TokenService,
                private router: Router,
                private user_service: UserService
              ) { }

  public sign_up(sign_up_form: FormGroup)
  {
    this.subscriptio_sign_up = this.http_client.post(`${this.server_url}/sign-up`, sign_up_form.value).subscribe(
          response => {
            this.token_service.store((<any> response).access_token);
            this.router.navigate([this.redirect_to]);
            sign_up_form.reset();
            this.user_service.setAttribute("first_name", (<any> response).first_name);
            this.user_service.setAttribute("last_name", (<any> response).last_name);
          },
          error => alert("Error: "+JSON.stringify(error.error.errors))
        );
      // sub.remove();
  }

  public login(login_form: FormGroup)
  {
      this.subscriptio_login = this.http_client.post(`${this.server_url}/login`, login_form.value).subscribe(
          response => {
              this.token_service.store((<any>response).access_token);
              this.router.navigate([this.redirect_to]);
              login_form.reset();
              this.user_service.setAttribute("first_name", (<any> response).first_name);
              this.user_service.setAttribute("last_name", (<any> response).last_name);
          },
          error => alert("Error: "+error.error.error)
      );
  }

  public change_input_status(input: string, is_valid: boolean) {
    this.inputs_valids_subject.next({ [input]: is_valid });
  }

  public ngOnDestroy(): void {
    this.subscriptio_sign_up?.unsubscribe();
    this.subscriptio_login?.unsubscribe();
}
}
