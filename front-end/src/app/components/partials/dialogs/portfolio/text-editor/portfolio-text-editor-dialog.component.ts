import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fonts } from 'src/app/enums/fonts/fonts';
import { IDictionary } from 'src/app/interfaces/dictionary/IDictionary';


@Component({
  selector: 'app-portfolio-text-editor-dialog',
  templateUrl: './portfolio-text-editor-dialog.component.html',
  styleUrls: ['./portfolio-text-editor-dialog.component.scss']
})
export class PortfolioTextEditorDialogComponent implements AfterViewInit
{
  public _fonts : IDictionary[] = [
    {key: "Arial", value: "Arial"},
    {key: "cursive", value: "Cursive"},
    {key: "fantasy", value: "Fantasy"},
    {key: "monospace", value: "Monospace"}
  ];
  public fonts = Fonts;

  private input_field : ElementRef;
  private field() {return this.input_field.nativeElement;}
  @ViewChild("input") input_text? :any;
  @ViewChild("font_size_slider") font_size_slider? :any;

  public styles_properties: {[key: string] :string|number} = {
    fontSize: 0,
    fontFamily: "",
    fontWeight: 0,
    fontStyle: "",
    textDecoration: "",
    textAlign: "",
    backgroundColor: "",
    color: "",
  };

  //Getters
  get font_family(){ return this.styles_properties.fontFamily as string; }

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

  public change_input_style(property: string, value: string)
  {
    this.field().style[property] = value;
  }

  public toggle_style(property: string, style_key: string)
  {
    if(this.styles_properties[property] === "")
    {
      this.styles_properties[property] = style_key;
      this.change_input_style(property, style_key);
    }
    else
    {
      this.styles_properties[property] = "";
      this.change_input_style(property, "");
    }
  }

  public toggle_style_multi_value(property: string, value: string)
  {
      if(this.styles_properties[property] === "" || this.styles_properties[property] !== value)
      {
        this.styles_properties[property] = value;
        this.change_input_style(property, value);
      }
      else if(this.styles_properties[property] === value)
      {
        this.styles_properties[property] = "";
        this.change_input_style(property, "");
      }
  }

  public on_text_change(event: any)
  {
      this.field().value = event.target.value;
  }

  public initialize_inputs()
  {
    //Input Value
    this.input_text.nativeElement.value = this.field().value;

    //Get the list of element styles to edit it after
    let styles = window.getComputedStyle(this.field());

    //Font Size
    this.styles_properties.fontSize = +styles.fontSize.substr(0, styles.fontSize.length-2);
    //Font Family
    this.styles_properties.fontFamily = styles.fontFamily;
    //Font Weight
    this.styles_properties.fontWeight = (+styles.fontWeight >= 700) ? 'bold' : '';
    //Font fontStyle
    this.styles_properties.fontStyle = (styles.fontStyle === "italic") ? "italic" : "";
    //Font textDecoration
    this.styles_properties.textDecoration = (styles.textDecorationLine === "underline") ? "underline" : "";
    //Font textAlign
    this.styles_properties.textAlign = (["right", 'center', 'left'].indexOf(styles.textAlign) !== -1) ? styles.textAlign : "";

    this.cdr.detectChanges();
  }
}
