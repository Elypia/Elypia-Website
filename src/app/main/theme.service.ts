/*
 * Copyright 2019-2020 Elypia CIC and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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

  /**
   * The currenly selected theme, defaults to undefined.
   * This allows us to apply no-theme, so it uses the system configured theme instead.
   */
  selectedTheme: Theme = undefined;

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
      this.selectedTheme = theme[0];
    else if (theme.length > 1)
      this.logger.warn('Multiple themes matched the class stored class name.');
  }

  /**
   * Change the selected theme to the new one and store the class
   * of this theme in local storage to retrieve again.
   *
   * @param theme The new theme the user wants to have.
   */
  public setTheme(theme: Theme): void {
    localStorage.setItem('theme', theme.class);
    this.selectedTheme = theme;
  }
}
