import {Component} from '@angular/core';
import {ThemeService} from './themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public themeService: ThemeService) {

  }
}
