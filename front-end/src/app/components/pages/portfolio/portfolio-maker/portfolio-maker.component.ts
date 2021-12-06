import { Component, OnInit } from '@angular/core';
import { IDictionary } from 'src/app/interfaces/dictionary/IDictionary';

@Component({
  selector: 'app-portfolio-maker',
  templateUrl: './portfolio-maker.component.html',
  styleUrls: ['./portfolio-maker.component.scss']
})
export class PortfolioMakerComponent implements OnInit
{
  public pages_list: IDictionary[] = [
    {key: "home",    "value": "Home"},
    {key: "about",   "value": "About"},
    {key: "contact", "value": "Contact"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
