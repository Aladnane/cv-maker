import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import Cropper from 'cropperjs';
import { CvInfoService } from 'src/app/services/binding/cv-info/cv-info.service';
import { PhotoEditorService } from 'src/app/services/photo_editor/photo-editor.service';

@Component({
	selector: 'app-photo-editor',
	templateUrl: './photo-editor.component.html',
	styleUrls: ['./photo-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PhotoEditorComponent implements OnInit, AfterViewInit
{
  public uploded_image_url: string;
  public cropped_photo: string = "";
  @ViewChild("cv_picture",{static: false}) cv_picture? : ElementRef;
  private cropper? : Cropper;
  @Output() display_photo_editor = new EventEmitter<boolean>();
  private use_photo_editor : boolean = false;

  public constructor(
    private cv_info_service: CvInfoService,
    private photo_editor_service: PhotoEditorService
  )
  {
    this.uploded_image_url = this.cv_info_service.picture;

    this.cv_info_service.cv_info.subscribe(cv => this.cropper?.replace(cv.picture));

    this.photo_editor_service.use_photo_editor.subscribe(use_photo_editor => {
      this.use_photo_editor = use_photo_editor;
      console.log(`this.use_photo_editor: ${this.use_photo_editor}`);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit()
  {
    this.cropper_photo(this.cv_picture?.nativeElement);
  }

  public on_change_cv_picture(event: any)
  {
    if(!event.target.files){return;}

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any)=>{

      this.uploded_image_url = e.target.result;

      this.cropper?.replace(this.uploded_image_url);
    }
  }

  public cropper_photo(picture: any)
  {
    this.cropper = new Cropper(picture, {
        zoomable: false,
        aspectRatio: 1,
        crop: () => {

          console.log(`cropper_photo: ${this.use_photo_editor}`);

          if(!this.use_photo_editor)
          {
            console.log("cancel");

            return
          }

          const canvas = this.cropper?.getCroppedCanvas();

          this.cropped_photo = canvas?.toDataURL("image/png") ?? "";

          this.cv_info_service.change_picture(this.cropped_photo);
        }
    })
  }
}
