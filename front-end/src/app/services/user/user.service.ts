import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User = new User();
  public user_subject = new BehaviorSubject<User>(this._user);
  public user = this.user_subject.asObservable();

  constructor(private authentication_service: AuthenticationService)
  {
      if(this.authentication_service.is_authenticated())
      {
          if(!this._user.first_name)
          {
            this._user.first_name = this.getAttribute("first_name");
          }
          if(!this._user.last_name)
          {
            this._user.last_name = this.getAttribute("last_name");
          }
      }
  }

  public setAttribute(key: string, value: string)
  {
      this.user_subject.next(Object.assign(this.user_subject.value, {[key]: value}));
      localStorage.setItem(key, value);
  }

  public getAttribute(key: string): string
  {
      return localStorage.getItem(key) as string;
  }
}
