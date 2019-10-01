import {Component} from '@angular/core';
import {ThemeService} from '../../services/theme/theme.service';
import {LoginFormComponent} from '../../dialogs/login-form/login-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public themeService: ThemeService, public dialog: MatDialog) {

  }

  public openDialog(): void {
    this.dialog.open(LoginFormComponent);
  }


}
