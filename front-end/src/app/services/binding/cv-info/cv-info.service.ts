import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CV } from 'src/app/classes/cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvInfoService
{
  public cv_info_subject = new BehaviorSubject<CV>(new CV());
  public cv_info = this.cv_info_subject.asObservable();
  private cv: CV = new CV();

  constructor()
  {
    this.cv_info.subscribe(cv => this.cv = cv);
  }

  public change_value(input: string, value: string)
  {
      this.cv_info_subject.next(Object.assign(this.cv_info_subject.value, {[input]: value}));
  }

  public change_value_trainings_diplomas(index: number, input: string, value: string)
  {
      this.cv.trainings_diplomas[index] = Object.assign(this.cv.trainings_diplomas[index], {[input]: value});
      this.cv_info_subject.next(this.cv);
  }

  public add_value_trainings_diplomas()
  {
      let index = this.cv.trainings_diplomas.push(Object.assign({}, {
                                                          trainings_diplomas_name: "",school_name : "",school_localtion : "",field_study : "",start_date : "",end_date : "",
                                                        })) - 1;
      this.cv_info_subject.next(this.cv);

      return index;
  }

  public remove_value_trainings_diplomas(block_index: number)
  {
      this.cv.trainings_diplomas.splice(block_index, 1);

      // this.cv_info_subject.next(this.cv);
  }
}
