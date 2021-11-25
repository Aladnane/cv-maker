import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['../../../pages/connection/layout/connection-block.scss',
    './cv-form.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})

export class CvFormComponent
{
  public cv_form: FormGroup;
  @Input() block_active : string = "";
  @Output() next_block_emitter = new EventEmitter<string>();
  @Output() previous_block_emitter = new EventEmitter<string>();
  @Output() display_photo_editor = new EventEmitter<boolean>();

  public blocks_active = {
    "education": 0,
    "skills": 0,
    "work_history": 0
  }
  public cv_user_picture_url = "/assets/images/user-placeholder.jpeg";

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
  public inputs_list_work_history = [
    {label: "Job",        name: "job"},
    {label: "Employer",   name: "employer"},
    {label: "City",       name: "city"},
    {label: "Start Date", name: "start_date"},
    {label: "End Date",   name: "end_date"},
  ];

  get form(){return this.cv_form.controls;}

  get trainings_diplomas(){return this.form["trainings_diplomas"] as FormArray;}
  get work_history(){return this.form["work_history"] as FormArray;}

  get skills(){return this.form["skills"] as FormArray;}
  get skills_specializations(){return this.cv_form.get(["skills"]) as FormArray}

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
        "skills": this.form_builder.array([this.skills_group()]),
        //
        "work_history": this.form_builder.array([this.work_history_group()]),
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

  submit(event: any)
  {
    event.preventDefault();
  }

  public change_selected_picture(event: any)
  {
    if(!event.target.files){return;}

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any)=>{

      // this.cv_info_service.picture = e.target.result;

      this.cv_info_service.change_value("picture", e.target.result);

      this.display_photo_editor.emit(true);
    }
  }

  //Trainings / Diplomas
  public add_trainings_diplomas_group()
  {
    (this.cv_form.controls["trainings_diplomas"] as FormArray).push(this.trainings_diplomas_group());

    this.blocks_active.education = this.cv_info_service.add_value_trainings_diplomas();
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
    if(this.blocks_active.education === block_index)
    {
      this.blocks_active.education = -1;
      return;
    }

    this.blocks_active.education = block_index;
  }

  public toggle_block_active_skills(block_index: number)
  {
    if(this.blocks_active.skills === block_index)
    {
      this.blocks_active.skills = -1;
      return;
    }

    this.blocks_active.skills = block_index;
  }

  public toggle_block_active_work_history(block_index: number)
  {
    if(this.blocks_active.work_history === block_index)
    {
      this.blocks_active.work_history = -1;
      return;
    }

    this.blocks_active.work_history = block_index;
  }

  public remove_trainings_diplomas(block_index: number)
  {
    document.querySelector(".trainings_diplomas[data-index='"+block_index+"']")?.remove();

    (this.cv_form.controls["trainings_diplomas"] as FormArray).removeAt(block_index);

    this.cv_info_service.remove_value_trainings_diplomas(block_index)
  }

  //Skills
  public skills_group():FormGroup
  {
    return this.form_builder.group({
      "specialization_name": [],
      "specialization": this.form_builder.array([
          this.form_builder.group({
            "title": [],
            "skills": [[]],
          })
      ])
    });
  }

  public get_specializations(skill : AbstractControl):AbstractControl[]
  {
      let _skill = <FormGroup> skill;

      return (_skill.get("specialization") as FormArray).controls;
  }

  public add_skills_group()
  {
    (this.cv_form.controls["skills"] as FormArray).push(this.skills_group());

    this.blocks_active.skills = this.cv_info_service.add_value_skills();
  }


  public remove_skills_group(block_index: number)
  {
    document.querySelector(".skills[data-index='"+block_index+"']")?.remove();

    (this.cv_form.controls["skills"] as FormArray).removeAt(block_index);

    this.cv_info_service.remove_value_skills(block_index)
  }

  public append_skill(specialization : AbstractControl, value: string, id: string, group_index: number, spec_index: number, with_comma = false)
  {
    let _specialization = <FormGroup> specialization;

    let skill = (!with_comma) ? value : value.substring(0, value.length-1);

    (_specialization.get("skills")?.value as string[]).push(skill);

    (<HTMLInputElement>document.getElementById(id)).value = "";

    //Append also into the preview component
    this.cv_info_service.change_value_skills("skills", this.cv_form.get(["skills"])?.value[group_index]["specialization"][spec_index].skills, group_index, spec_index);
  }

  public check_key_append_skill(specialization : AbstractControl, event: any, id: string, group_index: number, spec_index: number)
  {
    if(event.key !== ',')
      return;

    this.append_skill(specialization, event.target.value, id, group_index, spec_index, true);
  }

  public append_skill_by_id(specialization : AbstractControl, id: string, group_index: number, spec_index: number)
  {
      let value = (<HTMLInputElement>document.getElementById(id)).value;

      this.append_skill(specialization, value, id, group_index, spec_index);
  }

  public list_skills_names(spec: AbstractControl):string[]
  {
    let _spec = <FormGroup> spec;

    return ((_spec.get("skills") as FormControl).value) as string[];
  }

  public remove_skill_tag(specialization: AbstractControl, group_index: number, spec_index: number, tag_index: number)
  {
    let _specialization = <FormGroup> specialization;

    (_specialization.get("skills")?.value as string[]).splice(tag_index, 1);

    this.cv_info_service.change_value_skills("skills", this.cv_form.get(["skills"])?.value[group_index]["specialization"][spec_index].skills, group_index, spec_index);
  }

  //work history
  public work_history_group():FormGroup
  {
    return this.form_builder.group(
    {
      "job": [""],
      "employer": [""],
      "city": [""],
      "start_date": [""],
      "end_date": [""],
    });
  }

  public add_work_history_group()
  {
    (this.cv_form.controls["work_history"] as FormArray).push(this.work_history_group());

    this.blocks_active.work_history = this.cv_info_service.add_value_work_history();
  }

  public remove_work_history(block_index: number)
  {
    document.querySelector(".work_history[data-index='"+block_index+"']")?.remove();

    (this.cv_form.controls["work_history"] as FormArray).removeAt(block_index);

    this.cv_info_service.remove_value_work_history(block_index)
  }

}
