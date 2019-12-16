import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.css']
})
export class BrandCardComponent implements OnInit {

  /** The simple name of this image. */
  @Input() brandingName: string;

  /** The logo to display. */
  @Input() imageUrlPrefix: string;

  @Input() imageAlt: string;

  constructor() { }

  ngOnInit() {

  }
}
