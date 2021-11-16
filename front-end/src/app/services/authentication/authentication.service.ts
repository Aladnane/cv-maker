import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private token_service: TokenService,
              private router: Router) { }

  public is_authenticated(): boolean
  {
	  return !!this.token_service.get();
  }

  public disconnect(): void
  {
  	this.token_service.remove();
    // console.log(this.router.url);  //If the url == Profile redirect IF not just use observable for display and hide items

    this.router.navigate(["/"]);
  }
}
