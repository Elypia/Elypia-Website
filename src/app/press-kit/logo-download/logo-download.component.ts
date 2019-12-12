import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo-download',
  templateUrl: './logo-download.component.html',
  styleUrls: ['./logo-download.component.css']
})
export class LogoDownloadComponent implements OnInit {

  /** The simple name of this image. */
  @Input() brandingName: string;

  /** The logo to display. */
  @Input() imageUrlPrefix: string;

  @Input() imageAlt: string;

  constructor() { }

  ngOnInit() {

  }
}
