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
