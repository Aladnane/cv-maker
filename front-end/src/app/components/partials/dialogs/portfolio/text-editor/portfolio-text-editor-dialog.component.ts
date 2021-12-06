import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDictionary } from 'src/app/interfaces/dictionary/IDictionary';


@Component({
  selector: 'app-portfolio-text-editor-dialog',
  templateUrl: './portfolio-text-editor-dialog.component.html',
  styleUrls: ['./portfolio-text-editor-dialog.component.scss']
})
export class PortfolioTextEditorDialogComponent implements AfterViewInit
{

  public fonts : IDictionary[] = [
    {key: "robot", value: "Robot"},
    {key: "cairo", value: "Cairo"},
    {key: "open_sans", value: "Open Sans"},
    {key: "readex_pro", value: "Readex Pro"},
    {key: "corinthia", value: "Corinthia"},
  ];
  public font_styles : string[] = [];
  private input_field : ElementRef;
  private field() {return this.input_field.nativeElement;}
  @ViewChild("input") input_text? :any;
  @ViewChild("font_size_slider") font_size_slider? :any;
  public font_size: number = 0;


  constructor(
      @Inject(MAT_DIALOG_DATA) public data: {input: ElementRef},
      private cdr: ChangeDetectorRef
  )
  {
    this.input_field = data.input;
  }
  ngAfterViewInit(): void
  {
    this.initialize_inputs();
  }

  public display_slider_value(value: number)
  {
    return value+"px";
  }

  public change_input_font_size(font_size:number | null)
  {
    this.field().style.fontSize = `${font_size}px`;
  }



  public toggle_font_style(style_key: string)
  {
      if(this.font_styles.indexOf(style_key) === -1)
      {
        this.font_styles.push(style_key);
      }
      else
      {
        let index = this.font_styles.indexOf(style_key);
        this.font_styles.splice(index, 1);

      }
  }

  public on_text_change(event: any)
  {
      this.field().value = event.target.value;
  }

  public initialize_inputs()
  {
    this.input_text.nativeElement.value = this.field().value;
    // console.log(this.field().style);

    // console.log(window.getComputedStyle(this.field()).fontSize);
    let font_size = window.getComputedStyle(this.field()).fontSize;

    this.font_size = +font_size.substr(0, font_size.length-2);
    this.cdr.detectChanges();
    // console.log(font_size.substr(0, font_size.length-2));

  }
}
