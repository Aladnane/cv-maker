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
  // @ViewChild('pdf', {static: true}) test?: ElementRef;
  // @ViewChild('pdf') test?: ElementRef;

  constructor(private cv_info_service: CvInfoService)
  {
    this.cv_info_service.cv_info.subscribe(cv => this.cv = cv);
  }

  ngOnInit(): void {
  }

  public download_cv()
  {
    /*// var cv = <HTMLElement>document.getElementById("pdf");

    // // console.log(cv);

    // html2canvas(<HTMLElement>document.getElementById("pdf")).then(function(canvas){
    //   console.log(canvas);
    //   (<HTMLElement>document.getElementById("test")).appendChild(canvas);
      // var imgData = canvas.toDataURL('image/png');

      // var doc = new jsPDF();

      // doc.addImage(imgData,0,0, 208, 500);

      // doc.save("cv.pdf");
    });


      // let cv = new jsPDF('p', 'pt', 'a4');
      // cv.text("TTEST", 20, 20);
      // cv.save();

      // cv.html(this.test?.nativeElement.innerHtml, {
      //   callback: (cv)=>{ cv.save("CV.pdf"); }
      // });*/
  }


}
