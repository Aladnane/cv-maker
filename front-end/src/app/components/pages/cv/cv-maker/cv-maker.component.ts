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
  public block_active: string = "heading";

  // // @ViewChild('#cv_preview', {static: true}) test?: ElementRef;


  constructor(private reduce_left_menu_service: ReduceLeftMenuService)
  {
    this.reduce_left_menu_service.left_menu_displayed.next(false);
  }

  // public download_cv()
  // {
  //     let cv = new jsPDF('p', 'pt', 'a4');

  //     // cv.text("Younes ADNANE", 10, 10).save();

  //     cv.html(this.test?.nativeElement, {
  //       callback: (cv)=>{ cv.save("CV.pdf"); }
  //     });
  // }
}
