import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CV } from 'src/app/classes/cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvInfoService
{
  public cv_info_subject = new BehaviorSubject<CV>(new CV("", "Younes",
                                                              "Adnane",
                                                              "younes.adnane4@gmail.com",
                                                              "Web Developer","+212 63545454","Lorem Ipsum is simply dummy text of the printing and typesetting",
                                                              "12/12/1900",
                                                              this.get_trainings_diplomas_test_data(),
                                                              this.get_specialization_test_data(),
                                                              this.get_work_history_test_data(),

                                                              ));
  public cv_info = this.cv_info_subject.asObservable();
  private cv: CV = new CV();

  get picture()
  {
    return this.cv.picture;
  }

  set picture(picture)
  {
    this.cv.picture = picture;
  }

  constructor()
  {
    this.cv_info.subscribe(cv => this.cv = cv);
  }

  public change_picture(picture: string)
  {
    this.cv.picture = picture;
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

  public change_value_skills(input: string, value: any, group_index: number, spec_index: number = -1)
  {
      if(spec_index !== -1)
        this.cv.skills[group_index].specialization[spec_index] = Object.assign(this.cv.skills[group_index].specialization[spec_index], {[input]: value});
      else
        this.cv.skills[group_index] = Object.assign(this.cv.skills[group_index], {[input]: value});

      this.cv_info_subject.next(this.cv);
  }

  public change_value_work_history(index: number, input: string, value: string)
  {
      this.cv.work_history[index] = Object.assign(this.cv.work_history[index], {[input]: value});
      this.cv_info_subject.next(this.cv);
  }

  /*
  *Trainings diplomas
  */
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

  /*
  *Skills
  */
  public add_value_skills()
  {
      let index = this.cv.skills.push(Object.assign({}, {
                                        'specialization_name': "",'specialization' : [{title: "", skills: []}]
                                                        })) - 1;
      this.cv_info_subject.next(this.cv);

      return index;
  }

  public remove_value_skills(block_index: number)
  {
      this.cv.skills.splice(block_index, 1);
  }

  /*
  *Trainings diplomas
  */
  public add_value_work_history()
  {
      let index = this.cv.work_history.push(Object.assign({}, {
                                                            "job": "", "employer": "", "city": "", "start_date": "", "end_date": "",
                                                            })) - 1;
      this.cv_info_subject.next(this.cv);

      return index;
  }

  public remove_value_work_history(block_index: number)
  {
      this.cv.work_history.splice(block_index, 1);
  }

  //Test Data
  private get_trainings_diplomas_test_data()
  {
    return [{
            trainings_diplomas_name: "Formation en license professionnelle Informatique de gestion.",
            school_name : "FSJES",
            school_localtion : "Martil",
            start_date : "2019",
            end_date : "2020",
          }];
  }
  private get_specialization_test_data()
  {
    return [{
            "specialization_name": "WEB",
            "specialization": [{
                title: "Back-end",
                skills: ["Laravel", "PHP", "WLangage", "Asp.net"]
              },
              {
                title: "Front-end",
                skills: ["Sass", "Javascript", "JQuery", "Html 5", "Css 3"]
              }]
            },
          {
            "specialization_name": "laravel",
            "specialization": [{
                title: "Back-end",
                skills: ["Livewire"]
              }]
          }];
  }

  public get_work_history_test_data()
  {
    return [
      {
        "job": "Developpeur Web Et Desktop",
        "employer": "Association Targa-aide",
        "city": "Tanger",
        "start_date": "10/2019",
        "end_date": "12/2023",
      },
      {
        "job": "Stage en developpement Web",
        "employer": "Dwave-tech",
        "city": "Tanger",
        "start_date": "04/2019",
        "end_date": "05/2019",
      },
      {
        "job": "Lorem ipsum dolor sit amet consectetur, ",
        "employer": "adipisicing elit. Officiis, optio.",
        "city": "Tanger",
        "start_date": "02/2019",
        "end_date": "02/2019",
      },
    ];
  }
}
