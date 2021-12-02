import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public full_page : boolean = false;

  public constructor(private router: Router)
  {
    this.router.events.subscribe(url =>
    {
      if(url instanceof NavigationEnd) {this.full_page = (<NavigationEnd>url).url === "/portfolio/create";}
    });
  }
}
