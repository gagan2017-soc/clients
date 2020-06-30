import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-casrouel',
  templateUrl: './main-casrouel.component.html',
  styleUrls: ['./main-casrouel.component.css']
})
export class MainCasrouelComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 150000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
   }

  ngOnInit(): void {
  }

}
