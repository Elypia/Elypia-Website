import {Component} from '@angular/core';
import {ThemeService} from '../../theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public themeService: ThemeService) {

  }
}
