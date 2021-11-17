import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public block_active_education : number = 0;
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

  get trainings_diplomas()
  {
    return this.form["trainings_diplomas"] as FormArray;
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
        "trainings_diplomas": this.form_builder.array([this.trainings_diplomas_group()]),
        //
        "skill": ["", [Validators.required, Validators.minLength(2)]],
      });
  }

  public previous_block()
  {
    this.previous_block_emitter.emit("");
  }

  public next_block()
  {
    this.next_block_emitter.emit("");
  }

  public add_trainings_diplomas()
  {
    (this.cv_form.controls["trainings_diplomas"] as FormArray).push(this.trainings_diplomas_group());

    this.block_active_education = this.cv_info_service.add_value_trainings_diplomas();
  }

  public trainings_diplomas_group():FormGroup
  {
    return this.form_builder.group({
      "trainings_diplomas_name": [""],
      "school_name": [""],
      "school_localtion": [""],
      "start_date": [""],
      "end_date": [""],
    });
  }

  public toggle_block_active_education(block_index: number)
  {
    if(this.block_active_education === block_index)
    {
      this.block_active_education = -1;
      return;
    }

    this.block_active_education = block_index;
  }


  public remove_trainings_diplomas(block_index: number)
  {
    document.querySelector(".trainings_diplomas[data-index='"+block_index+"']")?.remove();

    (this.cv_form.controls["trainings_diplomas"] as FormArray).removeAt(block_index);

    this.cv_info_service.remove_value_trainings_diplomas(block_index)
  }
}
