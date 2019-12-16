import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-press-kit-page',
  templateUrl: './press-kit-page.component.html',
  styleUrls: ['./press-kit-page.component.css']
})
export class PressKitPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle(environment.titlePrefix + ' | Press Kit');
  }

  ngOnInit() {

  }
}
