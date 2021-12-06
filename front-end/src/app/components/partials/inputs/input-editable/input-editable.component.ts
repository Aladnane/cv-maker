import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-editable',
  templateUrl: './input-editable.component.html',
  styleUrls: ['./input-editable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputEditableComponent implements OnInit {

  @Output() input_editable_emitter = new EventEmitter<string>();
  @Output("display_style_menu") display_style_menu_emitter = new EventEmitter<string>();
  @Input() multiline : boolean = false;
  @Input() input : string = "";
  @Input() placeholder : string = "";
  @Input() default_value : string = "";
  public input_editable : string = "";
  public input_selected : string = "";
  @ViewChild("input_field") input_field? : ElementRef;
  @ViewChild("textarea_field") textarea_field?: ElementRef;
  private input_focusout: boolean = false;
  private btn_focusout: boolean = false;

  constructor() {};


  ngOnInit(): void{}

  public emit_selected_input(input?: string | undefined)
  {

    this.input_editable = (input === undefined) ? this.input : <string>input;
    this.input_editable_emitter.emit(this.input);

  }

  public select_input(event?: MouseEvent)
  {
    if(typeof event !== undefined)
    {
      event?.preventDefault();
    }
    this.input_selected = this.input;

  }

  public focusout()
  {
    setTimeout(()=>{
      if(this.input_focusout)
      {
        this.input_focusout = false;
        return;
      }
      if(this.btn_focusout)
      {
        this.btn_focusout = false;
        return;
      }
      this.input_selected = "";
    }, 50);
  }

  public btn_click()
  {
    setTimeout(() => {
      this.input_focusout = true;
      this.btn_focusout = true;
      this.emit_selected_input();
      this.input_field?.nativeElement.focus();
    }, 0);
  }

}
