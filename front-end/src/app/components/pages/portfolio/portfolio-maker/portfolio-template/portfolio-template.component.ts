import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  public services_list = this.services_test_data();
  // @ViewChild("portfolio_template") portfolio_template? = //Scroll bar

  constructor(private mat_dialog: MatDialog) { }

  ngOnInit(): void{}

  public edit_text(text: string, event?: any)
  {
    this.mat_dialog.open(PortfolioTextEditorDialogComponent);
  }

  private services_test_data()
  {
    return [
      this.service_test_data(),
      this.service_test_data(),
      this.service_test_data(),
      this.service_test_data(),
      this.service_test_data(),
      this.service_test_data()
    ];
  }

  private service_test_data()
  {
    return {
        title: "Data Analysis",
        type: "chart",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum."
      };
  }
}
