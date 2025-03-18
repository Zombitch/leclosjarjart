import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss']
})
export class CarouselImageComponent {
  @Input() imageSrc: string = '';
}
