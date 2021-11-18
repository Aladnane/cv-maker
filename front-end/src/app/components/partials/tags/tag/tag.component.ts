import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `<span class='tag'>
              <span><ng-content></ng-content></span>
              <span class="icon" (click)='remove.emit()'><i class="las la-times"></i></span>
            </span>`,
  styles: [`
      .tag
      {
        background-color: #1E87F0;
        padding: 3px 7px 3px 7px;
        margin: 2px;
        display: flex;
        align-items: center;
        width: -moz-fit-content;
        width: fit-content;
        border-radius: 3px;
        opacity: .9;
        cursor: default;

        &:hover{opacity: 1}

        .icon
        {
          cursor: pointer;
          margin-left: 5px;
        }
      }
  `],
})
export class TagComponent implements OnInit {

  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
