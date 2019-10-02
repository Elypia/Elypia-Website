/*
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2019  Elypia CIC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
