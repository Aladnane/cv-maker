import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CV } from 'src/app/classes/cv/cv';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';
import { PhotoEditorService } from 'src/app/services/photo_editor/photo-editor.service';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.scss']
})
export class CvPreviewComponent implements OnInit {

  public cv: CV = new CV();
  @Input() block_active : string = "";

  constructor(
              private cv_info_service: CvInfoService,
            )
  {
    this.cv_info_service.cv_info.subscribe(cv => this.cv = cv);
  }

  @ViewChild("pdf_template") pdf_template : any;
  @ViewChild('pdf') pdf: any;

  ngOnInit(): void {}

  public download_cv()
  {
    // this.photo_editor_service.use_photo_editor_subject.next(false);

    const pdf = (<ElementRef>this.pdf).nativeElement.cloneNode(true);
    var pdf_template = document.getElementById("pdf_template")  as HTMLElement;
    pdf_template.appendChild(pdf);

    html2canvas(document.getElementById("pdf_template") as HTMLCanvasElement).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p','mm',[297, 210]);
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      let pdf_name = "CV"+((this.cv.first_name || this.cv.last_name) ? ` - ${this.cv.first_name} ${this.cv.last_name}` : "")+".pdf";
      pdf.save(pdf_name);

      pdf_template.removeChild(pdf_template.childNodes[0]);

      //Solution temporaire
      // this.cv_info_service.change_value("picture", this.cv.picture);
      this.cv_info_service.cv_info_subject.next(this.cv);
    });
  }

  public preview_cv()
  {

  }


}
