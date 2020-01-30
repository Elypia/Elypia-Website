/**
 * @license
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2020  Elypia CIC
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

import {Injectable} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {NGXLogger} from 'ngx-logger';

/**
 * Stores static metadata on each available theme.
 */
export interface Theme {
  name: string;
  class: string;
  color: string;
}

/**
 * Service to manage the selected theme and set or get
 * the current theme for users.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  /** Dark theme, uses primarily dark colors. */
  public static readonly DarkTheme: Theme = {
    name: 'Dark',
    class: 'elypia-dark-theme',
    color: '#2C2C2C'
  };

  /** Light theme, uses primarly light colors. */
  public static readonly LightTheme: Theme = {
    name: 'Light',
    class: 'elypia-light-theme',
    color: '#17679A'
  };

  /** An array of all themes available. */
  public readonly All: Theme[] = [
    ThemeService.DarkTheme,
    ThemeService.LightTheme
  ];

  /** The currenly selected theme, defaults to {@link DarkTheme}. */
  selectedTheme: Theme = ThemeService.DarkTheme;

  /**
   * @param overlayContainer The overlay container, used
   * to specify the current theme for overlay components.
   * @param logger Logger used to log runtime information.
   */
  constructor(
    private overlayContainer: OverlayContainer,
    private logger: NGXLogger
  ) {

  }

  /**
   * Read the localstorage to set the theme to whatever the user
   * previously configured.
   */
  public loadTheme() {
    const storedThemeClass: string = localStorage.getItem('theme');

    if (!storedThemeClass)
      return;

    this.logger.debug('Current theme is set to:', storedThemeClass);

    const theme: Theme[] = this.All.filter((t) => t.class === storedThemeClass);

    if (theme.length === 1)
      this.setTheme(theme[0]);
    else if (theme.length > 1)
      this.logger.warn('Multiple themes matched the class stored class name.');
  }

  /**
   * Change the selected theme to the new one and store the class
   * of this theme in local storage to retrieve again.
   *
   * @param theme The new theme the user wants to have.
   */
  public changeTheme(theme: Theme): void {
    localStorage.setItem('theme', theme.class);
    this.setTheme(theme);
  }

  /**
   * Set the selected theme to the specified theme.
   *
   * @param theme The new theme to set the website to.
   */
  public setTheme(theme: Theme): void {
    const classes: DOMTokenList = this.overlayContainer.getContainerElement().classList;

    if (this.selectedTheme)
      classes.remove(this.selectedTheme.class);

    this.selectedTheme = theme;
    classes.add(theme.class);
  }
}
