import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IDictionary } from 'src/app/interfaces/dictionary/IDictionary';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboComponent
{
  @Input() title? : string;
  @Input() placeholder? : string;
  @Input() list : IDictionary[] = [];
  @Input() list_enum : any;
  public active: boolean = false;
  public selected_value?: string;
  @Output() change_value = new EventEmitter<string>();

  constructor() {}

  public toggle_display()
  {
    this.active = !this.active;
  }

  public selected_item(item : IDictionary)
  {
    this.selected_value = item.key;
    this.placeholder = item.value;
    this.change_value.emit(item.key);
  }

  public selected_enum_item(key : any, value : any)
  {
    this.selected_value = key;
    this.placeholder = value;
    this.change_value.emit(key);
  }

}
