import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ReduceLeftMenuService } from 'src/app/services/animations/reduce_left_menu/reduce-left-menu.service';

@Component({
  selector: 'app-cv-maker',
  templateUrl: './cv-maker.component.html',
  styleUrls: ['./cv-maker.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CvMakerComponent
{
  public blocks: string[] = ['heading', 'education', 'skills', 'work history', 'download'];//'projects', 'finalize',
  public block_active: number = 0;
  public display_photo_editor: boolean = false;

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

  public on_display_photo_editor(display: any)
  {
    this.display_photo_editor = display;
  }
}
