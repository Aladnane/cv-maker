
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //Save the token in local storage
  public store(token: string)
  {
    localStorage.setItem("_token", token);
  }

  public remove()
  {
    localStorage.removeItem("_token");
  }

  public get():string | null
  {
    return localStorage.getItem("_token");
  }

}
