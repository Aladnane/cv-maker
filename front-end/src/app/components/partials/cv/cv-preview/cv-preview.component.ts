import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input() block_active : string = "";

  constructor(private cv_info_service: CvInfoService)
  {
    this.cv_info_service.cv_info.subscribe(cv => this.cv = cv);
    //Test Data
    this.cv.first_name = "Younes";
    this.cv.last_name = "Adnane";
    this.cv.profession = "Web Developper";
    this.cv.email = "Younes@adnane.com";
    this.cv.phone = "+212 060546988";
  }

  ngOnInit(): void {
  }

  public download_cv()
  {
    html2canvas(document.getElementById("pdf") as HTMLCanvasElement).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p','mm',[297, 210]);
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      let pdf_name = "CV"+((this.cv.first_name || this.cv.last_name) ? ` - ${this.cv.first_name} ${this.cv.last_name}` : "")+".pdf";
      pdf.save(pdf_name);
      });
  }


}
