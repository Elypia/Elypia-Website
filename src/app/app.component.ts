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
import {Theme, ThemeService} from './theme.service';
import {NGXLogger} from 'ngx-logger';
import {NgcCookieConsentService} from 'ngx-cookieconsent';
import {MenuNode} from './toolbar/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * This defined the menu structure, it's passed to the {@link NestedTreeControl}
   * if on mobile, otherwise is read to create lots of buttons for desktop devices.
   */
  public readonly MenuTree: MenuNode[] = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Donate', href: '/donate' },
    {
      name: 'Support',
      children: [
        { name: 'Press Kit', href: '/support/press-kit' },
        { name: 'Privacy Policy', href: '/support/privacy' },
        { name: 'ePrivacy Policy', href: '/support/eprivacy' }
      ]
    }
  ];

  constructor(
    private concentService: NgcCookieConsentService,
    private ngxLogger: NGXLogger,
    public themeService: ThemeService
  ) {
    console.log('%cHold on!', 'color: red; font-size: 64px;');
    console.log('If someone\'s told you to open this panel or console to perform ' +
      'commands or check something on your browser, chances are they\'re trying to access ' +
      'sensitive information which could compromise your account or data. ' +
      'Only continue if you know what you\'re doing; if you do know what you\'re doing ' +
      'feel free to contribute to our projects-page at <https://gitlab.com/Elypia>!');
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
