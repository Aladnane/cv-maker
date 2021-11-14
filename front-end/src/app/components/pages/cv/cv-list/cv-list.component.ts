import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {

  public cv_list : any; //Must be list of CV Class

  constructor()
  {
    this.cv_list = this.initialize_cv_list();
  }

  ngOnInit(): void {
  }

  private initialize_cv_list()
  {
    return [
      {
        name: "Model 1",
        thumbnail_url: "/assets/images/cv-template.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 2",
        thumbnail_url: "/assets/images/cv-template.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 3",
        thumbnail_url: "/assets/images/cv-template.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
      {
        name: "Model 4",
        thumbnail_url: "/assets/images/cv-template.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, facilis",
        tags: ["Professional", "Programming", "Perfect", "Dark Colors"]
      },
    ];

  }
}
