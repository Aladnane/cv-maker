import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboComponent implements OnInit
{

  @Input() title : string = "";
  @Input() placeholder : string = "";
  @Input() list : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
