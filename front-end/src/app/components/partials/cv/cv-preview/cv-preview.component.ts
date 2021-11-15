import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CV } from 'src/app/classes/cv';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';


@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.scss']
})
export class CvPreviewComponent implements OnInit {

  public cv: CV = new CV();

  constructor(private cv_info_service: CvInfoService)
  {
    this.cv_info_service.cv_info.subscribe(cv => this.cv = cv);
  }

  ngOnInit(): void {
  }

  public download_cv()
  {
    html2canvas(document.getElementById("pdf") as HTMLCanvasElement).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      let pdf_name = "CV"+((this.cv.first_name || this.cv.last_name) ? ` - ${this.cv.first_name} ${this.cv.last_name}` : "")+".pdf";
      pdf.save(pdf_name);
      });
  }


}
