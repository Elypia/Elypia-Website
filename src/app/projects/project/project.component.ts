import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() name: string;
  @Input() briefDescription: string;
  @Input() image: string;
  @Input() imageAlt: string;
  @Input() source: string;

  constructor() { }
}
