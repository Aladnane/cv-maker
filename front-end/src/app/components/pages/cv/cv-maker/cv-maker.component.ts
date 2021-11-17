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
  public blocks: string[] = ['heading', 'education', 'skills', 'work history', 'summary', 'finalize', 'download'];
  public block_active: number = 0;

  constructor(private reduce_left_menu_service: ReduceLeftMenuService)
  {
    this.reduce_left_menu_service.left_menu_displayed.next(false);
  }

  public next_block():void
  {
      if(this.block_active == this.blocks.length -1)
        return;

      this.block_active++;
  }

  public previous_block():void
  {
      if(this.block_active == 0)
        return;

      this.block_active--;
  }
}
