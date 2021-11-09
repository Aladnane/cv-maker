import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon_classes: string = "";
  @Input() text: string = "";
  @Input("btn") btn_class: string = "";
  @Input() direction: string = "ltr";

  constructor() { }

  ngOnInit(): void {
  }

}
