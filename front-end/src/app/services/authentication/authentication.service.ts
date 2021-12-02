import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public server_url: string = "http://localhost:8000/api";
  public auth_subject = new BehaviorSubject<boolean>(this.is_authenticated());
  public auth = this.auth_subject.asObservable();

  constructor(private token_service: TokenService,
              private router: Router,
              private http_client: HttpClient) { }

  public is_authenticated(): boolean
  {
    let token = this.token_service.get();

    // this.http_client.post(`${this.server_url}/check-token`, '{"token": token}').subscribe(
    //   response => console.log(`response: `)//,
    //   //error => console.log(`error: ${error.error.errors}`)
    // );

    if(!!this.token_service.get())
    {
      this.auth_subject?.next(true);
      return true;
    }

    this.auth_subject?.next(false);
    return false;
  }

  public disconnect(): void
  {
  	this.token_service.remove();
    // console.log(this.router.url);  //If the url == Profile redirect IF not just use observable for display and hide items
    this.auth_subject?.next(false);

    this.router.navigate(["/"]);
  }
}
