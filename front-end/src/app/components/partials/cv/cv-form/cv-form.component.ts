import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['../../../pages/connection/layout/connection-block.scss',
    './cv-form.component.scss']
})
export class CvFormComponent
{
  public cv_form: FormGroup;
  @Input() block_active : string = "";

  get form()
  {
    return this.cv_form.controls;
  }

  constructor(
        private form_builder: FormBuilder,
        public cv_info_service: CvInfoService
    )
  {
      this.cv_form = this.form_builder.group({
        "first_name": [""],
        "last_name": [""],
        "email": [""],
        "profession": [""],
        "phone": [""],
        "address": [""],
        "city": [""],
      });
  }


}
