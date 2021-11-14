import { Component, OnInit } from '@angular/core';
import { ReduceLeftMenuService } from 'src/app/services/animations/reduce_left_menu/reduce-left-menu.service';

@Component({
  selector: 'app-cv-maker',
  templateUrl: './cv-maker.component.html',
  styleUrls: ['./cv-maker.component.scss']
})
export class CvMakerComponent implements OnInit {

  public block_active: string = "heading";

  constructor(private reduce_left_menu_service: ReduceLeftMenuService)
  {
    this.reduce_left_menu_service.left_menu_displayed.next(false);
  }

  ngOnInit(): void {
  }

}
