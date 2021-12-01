import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: [
    '../../../../../../src/assets/styles/global/grid/items-list/items-list.scss',
    './portfolio-list.component.scss'
  ]
})

export class PortfolioListComponent implements OnInit {

  public portfolio_list : any; //Must be list of portfolio Class fetched from database

  constructor(
              public router: Router,
              private authentication_service: AuthenticationService
    )
  {
    this.portfolio_list = this.initialize_portfolio_list();
  }

  ngOnInit(): void {
  }

  public create_portfolio()
  {
    if(!this.authentication_service.is_authenticated())
      this.router.navigate(["login", {target: "portfolio", id: "545656S4"}]);
    else
      window.open("/portfolio/create", "_blank");
  }

  private initialize_portfolio_list()
  {
    return [
      {
        name: "Model 1",
        thumbnail_url: "/assets/images/portfolio-template.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 2",
        thumbnail_url: "/assets/images/portfolio-template.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 3",
        thumbnail_url: "/assets/images/portfolio-template.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 4",
        thumbnail_url: "/assets/images/portfolio-template.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
    ];

  }

}
