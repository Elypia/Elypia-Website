import {Component} from '@angular/core';
import {EnvironmentService} from '../../services/environment/environment.service';
import {ThemeService} from '../../themes/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public env: EnvironmentService, public themeService: ThemeService) {

  }
}
