import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CV } from 'src/app/classes/cv';

@Injectable({
  providedIn: 'root'
})
export class CvInfoService
{
  public cv_info_subject = new BehaviorSubject<CV>(new CV());
  public cv_info = this.cv_info_subject.asObservable();

  constructor() { }

  public change_value(input: string, value: string)
  {
      this.cv_info_subject.next(Object.assign(this.cv_info_subject.value, {[input]: value}));
  }
}
