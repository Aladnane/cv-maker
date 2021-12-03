import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioTextEditorDialogComponent } from 'src/app/components/partials/dialogs/portfolio/text-editor/portfolio-text-editor-dialog.component';

@Component({
  selector: 'app-portfolio-template',
  templateUrl: './portfolio-template.component.html',
  styleUrls: ['./portfolio-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioTemplateComponent implements OnInit {

  public input_editable : string = "";

  constructor(private mat_dialog: MatDialog) { }

  ngOnInit(): void
  {
    // this.edit_text("");
  }

  public edit_text(text: string, event?: any)
  {
    // if(typeof event != undefined)
    // {
    //   event.preventDefault();
    // }
    this.mat_dialog.open(PortfolioTextEditorDialogComponent);
  }

  // public make_input_editable(input: HTMLInputElement)
  // {
  //   input.addClass("editable");
  // }

}
