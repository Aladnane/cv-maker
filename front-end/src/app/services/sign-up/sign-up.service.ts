import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private server_url: string = "localhost:8000/api/sign-up";

  constructor(private httpClient: HttpClient) { }

  public sign_up(user_info: any):Observable<any>
  {
      return this.httpClient.post(this.server_url, user_info);
  }
}
