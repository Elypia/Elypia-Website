import {AfterViewInit, Component, ContentChildren, ElementRef, QueryList, ViewChild} from '@angular/core';
import {CarouselItemDirective} from './carousel-item.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  /**
   * Find all {@link CarouselItemDirective} in the ng-content.
   * We require this because we want to be able to mess with all
   * carousel items individually so we'll place the templates in ourselves
   * with a loop rather than using the ng-content as is.
   */
  @ContentChildren(CarouselItemDirective) public carouselItems: QueryList<CarouselItemDirective>;

  /** Collate all creates carousel elements into a list. */
  @ViewChild('item', {static: false, read: ElementRef}) private firstCarouselItem: ElementRef;

  public carouselWrapperStyle = {};

  ngAfterViewInit(): void {
    if (!this.carouselItems)
      return;

    const width: number = this.firstCarouselItem.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${width}px`
    };
  }
}
