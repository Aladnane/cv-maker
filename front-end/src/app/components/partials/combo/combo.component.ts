import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IDictionary } from 'src/app/interfaces/dictionary/IDictionary';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboComponent
{
  @Input() title : string = "";
  @Input() placeholder : string = "";
  @Input() list : IDictionary[] = [];
  public active: boolean = false;
  public selected_value?: string;

  constructor() { }

  public toggle_display()
  {
    this.active = !this.active;
  }

  public selected_item(item : IDictionary)
  {
    this.selected_value = item.key;
    this.placeholder = item.value;
  }

}
