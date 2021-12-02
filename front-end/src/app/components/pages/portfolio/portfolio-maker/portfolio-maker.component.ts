import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-maker',
  templateUrl: './portfolio-maker.component.html',
  styleUrls: ['./portfolio-maker.component.scss']
})
export class PortfolioMakerComponent implements OnInit {

  public pages_list = ["Home","About","Contact"];

  constructor() { }

  ngOnInit(): void {
  }

}
