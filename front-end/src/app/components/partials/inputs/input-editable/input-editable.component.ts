import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-editable',
  templateUrl: './input-editable.component.html',
  styleUrls: ['./input-editable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputEditableComponent implements OnInit {

  @Output() input_editable_emitter = new EventEmitter<string>();
  @Output("display_style_menu") display_style_menu_emitter = new EventEmitter<string>();
  @Input() input : string = "";
  @Input() placeholder : string = "";
  @Input() default_value : string = "";
  public input_editable : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public emit_selected_input(input: string)
  {
    this.input_editable = input;
    this.input_editable_emitter.emit(input);
  }
}
