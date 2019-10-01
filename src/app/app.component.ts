import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme, ThemeService} from './services/theme/theme.service';
import {NGXLogger} from 'ngx-logger';
import {NgcCookieConsentService} from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private concentService: NgcCookieConsentService,
    private ngxLogger: NGXLogger,
    public themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    const storedThemeClass: string = localStorage.getItem('theme');

    if (!storedThemeClass)
      return;

    this.ngxLogger.debug('Current theme is set to:', storedThemeClass);

    const theme: Theme[] = ThemeService.All.filter((t) => t.class === storedThemeClass);

    if (theme.length === 1)
      this.themeService.selectedTheme = theme[0];
    else if (theme.length > 1)
      this.ngxLogger.warn('Multiple theme matched the class stored class name.');
  }

  ngOnDestroy() {

  }
}
