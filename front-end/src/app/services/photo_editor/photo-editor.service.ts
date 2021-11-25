import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoEditorService {

  public use_photo_editor_subject = new Subject<boolean>();
  public use_photo_editor = this.use_photo_editor_subject.asObservable();

  constructor() { }
}
