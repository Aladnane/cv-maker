import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReduceLeftMenuService {

  public left_menu_displayed = new BehaviorSubject<boolean>(true);
  public display = this.left_menu_displayed.asObservable();

  constructor() { }
}
