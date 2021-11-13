import { Component, OnInit, ViewChild } from '@angular/core';
import { WithoutSpacesPipe } from 'src/app/pipes/without-spaces/without-spaces.pipe';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  @ViewChild("search") search: any;

  constructor(
                private withoutSpacesPipe: WithoutSpacesPipe,
                public auth_service: AuthenticationService
              ) { }

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
  }


}
