import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['../../../pages/connection/layout/connection-block.scss',
    './cv-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvFormComponent
{
  public cv_form: FormGroup;
  @Input() block_active : string = "";
  @Output() next_block_emitter = new EventEmitter<string>();
  @Output() previous_block_emitter = new EventEmitter<string>();
  public inputs_list_heading = [
      {label: "First Name"   , name: "first_name"},
      {label: "Last Name"    , name: "last_name"},
      {label: "Profession"   , name: "profession"},
      {label: "Email"        , name: "email"},
      {label: "Phone Number" , name: "phone"},
      {label: "Address"      , name: "address"},
      {label: "Date of Birth", name: "date_birth"},
  ];
  public inputs_list_trainings_diplomas = [
      {label: "Trainings / Diplomas" , name: "trainings_diplomas_name"},
      {label: "School Name"          , name: "school_name"},
      {label: "School Location"      , name: "school_localtion"},
      {label: "Field of Study"       , name: "field_study"},
      {label: "Start Date"           , name: "start_date"},
      {label: "End Date"             , name: "end_date"},
  ];
  public inputs_list_skills = [
    {label: "Skill", name: "skill"},
  ];

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
        "date_birth": [""],
        //
        "trainings_diplomas": this.form_builder.group({
          "trainings_diplomas_name": [""],
          "school_name": [""],
          "school_localtion": [""],
          "field_study": [""],
          "start_date": [""],
          "end_date": [""],
        }),
        //
        "skill": ["", [Validators.required, Validators.minLength(2)]],
      });
  }

  public previous_block()
  {
    console.log("inside form");

    this.previous_block_emitter.emit("");
  }
  public next_block()
  {
    this.next_block_emitter.emit("");
  }


  change_value(input: string, value: string)
  {
    console.log(`input: ${input} - value: ${value}`);
    // this.cv_info_service.change_value(input, value);
    // @ViewChild([input]) input : ElementRef;
    // input.focus();
  }

}
