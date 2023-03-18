import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent {
  images = [
    '../../assets/foundation.jpg',
    '../../assets/naac.jpg',
    '../../assets/audi.jpg',
  ];
}
