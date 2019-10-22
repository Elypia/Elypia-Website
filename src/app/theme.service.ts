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

import {Injectable} from '@angular/core';

export interface Theme {
  name: string;
  class: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  static readonly DarkTheme: Theme = {
    name: 'Dark',
    class: 'elypia-dark-theme',
    color: '#303030'
  };

  static readonly LightTheme: Theme = {
    name: 'Light',
    class: 'elypia-light-theme',
    color: '#FAFAFA'
  };

  static readonly All: Theme[] = [
    ThemeService.DarkTheme,
    ThemeService.LightTheme
  ];

  /** Defaults to Dark Theme */
  selectedTheme: Theme = ThemeService.DarkTheme;

  get All(): Theme[] {
    return ThemeService.All;
  }

  /**
   * Change the selected theme to the new one and store the class
   * of this theme in local storage to retrieve again.
   *
   * @param theme The new theme the user wants to have.
   */
  public changeTheme(theme: Theme): void {
    this.selectedTheme = theme;
    localStorage.setItem('theme', theme.class);
  }
}
