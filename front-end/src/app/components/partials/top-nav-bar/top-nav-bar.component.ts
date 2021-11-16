import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { WithoutSpacesPipe } from 'src/app/pipes/without-spaces/without-spaces.pipe';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  @ViewChild("search") search: any;
  public user?: User;

  constructor(
                private withoutSpacesPipe: WithoutSpacesPipe,
                public auth_service: AuthenticationService,
                public user_service: UserService
              )
  {
      this.user_service.user.subscribe(user => this.user = user);
  }

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
