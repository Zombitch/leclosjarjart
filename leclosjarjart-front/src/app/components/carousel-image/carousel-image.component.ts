import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'carousel-image',
    templateUrl: './carousel-image.component.html',
    styleUrls: ['./carousel-image.component.scss'],
    standalone: false
})
export class CarouselImageComponent implements AfterViewInit{
  @Input() imageSrc: string = '';
  @Input() imageList: string[] = [];

  slideIndex: number = 1;
  @ViewChildren('slide') slides!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    this.showSlide(this.slideIndex);
  }
  
  nextSlide(){
    this.showSlide(this.slideIndex += 1);
  }
  
  previousSlide(){
    this.showSlide(this.slideIndex -= 1);
  }

  showSlide(index: number){
    let i = 0;
    let dots = document.getElementsByClassName("demo");
    if (index > this.slides.length) {this.slideIndex = 1}
    if (index < 1) {this.slideIndex = this.slides.length}

    this.slides.forEach(slide => slide.nativeElement.style.display = "none");

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    const slideToShow = this.slides.get(this.slideIndex-1);
    if(slideToShow) slideToShow.nativeElement.style.display = "block";

    dots[this.slideIndex-1].className += " active";
  }         
}
