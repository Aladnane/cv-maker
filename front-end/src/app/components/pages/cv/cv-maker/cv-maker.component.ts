import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import jsPDF from 'jspdf';
import { ReduceLeftMenuService } from 'src/app/services/animations/reduce_left_menu/reduce-left-menu.service';

// declare var jsPDF: any;

@Component({
  selector: 'app-cv-maker',
  templateUrl: './cv-maker.component.html',
  styleUrls: ['./cv-maker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvMakerComponent
{
  public block_active: string = "download";//"heading";

  constructor(private reduce_left_menu_service: ReduceLeftMenuService)
  {
    this.reduce_left_menu_service.left_menu_displayed.next(false);
  }
}
