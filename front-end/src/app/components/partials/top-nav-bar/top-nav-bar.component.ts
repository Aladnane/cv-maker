import { Component, OnInit, ViewChild } from '@angular/core';
import { WithoutSpacesPipe } from 'src/app/pipes/without-spaces/without-spaces.pipe';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  @ViewChild("search") search: any;
  public authentified: boolean = false;

  constructor(private withoutSpacesPipe: WithoutSpacesPipe) { }

  ngOnInit(): void {
  }

  public focusOnSearchInput()
  {
    //Check if the input is empty
    if(!this.withoutSpacesPipe.transform(this.search.nativeElement.value))
    {
      this.search.nativeElement.focus();
      return;
    }

    //Search
    // console.log("without");        
  }

}
