import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-block',
  templateUrl: './full-block.component.html',
  styleUrls: ['./full-block.component.scss']
})
export class FullBlockComponent implements OnInit {

  @Input() title : string = "";
  @Input() url : string = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640";
  @Input() discount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
