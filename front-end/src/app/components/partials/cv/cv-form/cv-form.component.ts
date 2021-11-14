import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['../../../pages/connection/layout/connection-block.scss',
    './cv-form.component.scss']
})
export class CvFormComponent implements OnInit
{
  public cv_form: FormGroup;
  @Input() block_active : string = "";

  constructor(private form_builder: FormBuilder)
  {
      this.cv_form = this.form_builder.group({
        "first_name": ["Younes"],
        "last_name": ["Adnane"],
        "email": ["younes@adnane.com"],
        "profession": ["Web Developer"],
        "phone": ["061234567"],
        "address": ["Test Address"],
        "city": ["My City"],
      });
  }

  ngOnInit(): void {
  }

}
