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

  constructor(private mat_dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public edit_text(text: string)
  {
    this.mat_dialog.open(PortfolioTextEditorDialogComponent);
  }

}
