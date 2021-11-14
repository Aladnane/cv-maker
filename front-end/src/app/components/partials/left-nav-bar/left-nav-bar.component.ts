import { Component, OnInit } from '@angular/core';
import { ReduceLeftMenuService } from 'src/app/services/animations/reduce_left_menu/reduce-left-menu.service';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {

  public left_menu_displayed: boolean = true;

  constructor(private reduce_left_menu_service: ReduceLeftMenuService)
  {
    this.reduce_left_menu_service.display.subscribe(display => this.left_menu_displayed = display);
  }

  ngOnInit(): void {
  }

}
