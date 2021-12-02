import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subject, Subscription } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";
import { NotifyService } from "../notify/notify.service";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService implements OnDestroy
{
  public server_url: string = "http://localhost:8000/api";//"https://cvmakerbackend.000webhostapp.com/api";
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
                private user_service: UserService,
                private notify_service: NotifyService,
                private authentication_service: AuthenticationService
              ) { }

  public sign_up(sign_up_form: FormGroup)
  {
    this.notify_service.info("Checking...");

    this.subscriptio_sign_up = this.http_client.post(`${this.server_url}/sign-up`, sign_up_form.value).subscribe(
          response => {
            this.token_service.store((<any> response).access_token);
            this.router.navigate([this.redirect_to]);
            sign_up_form.reset();
            this.user_service.setAttribute("first_name", (<any> response).first_name);
            this.user_service.setAttribute("last_name", (<any> response).last_name);
            this.notify_service.success(`Welcome Mr ${(<any> response).first_name}`);
            this.authentication_service.auth_subject.next(true);
          },
          error => {
            if(typeof error.error.errors !== 'undefined' && typeof error.error.errors["email"] !== 'undefined')
              this.notify_service.error(error.error.errors.email, 4000);
            else
              this.notify_service.error("An error has been produced, please check the data entered", 4000);
          }
        );
      // sub.remove();
  }

  public login(login_form: FormGroup)
  {
      this.notify_service.info("Checking...");

      this.subscriptio_login = this.http_client.post(`${this.server_url}/login`, login_form.value).subscribe(
          response => {
              this.token_service.store((<any>response).access_token);
              this.router.navigate([this.redirect_to]);
              login_form.reset();
              this.user_service.setAttribute("first_name", (<any> response).first_name);
              this.user_service.setAttribute("last_name", (<any> response).last_name);
              this.notify_service.success(`Welcome Back Mr ${(<any> response).first_name}`);
              this.authentication_service.auth_subject.next(true);
          },
          error => {
              this.notify_service.error("The email address or password is incorrect. Please retry...");
          }
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
