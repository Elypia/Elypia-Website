import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from '../../services/environment/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public env: EnvironmentService) {

  }

  ngOnInit() {

  }
}
