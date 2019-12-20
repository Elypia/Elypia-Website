import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Described a locale that the website can be displayed.
 */
class Locale {

  /**
   * The code for this locale, this could be either language,
   * or language and location.
   */
  code: string;

  /** The user friendly name. */
  displayName: string;

  constructor(code: string, displayName: string) {
    this.code = code;
    this.displayName = displayName;
  }

  /**
   * Return the {@link #code} with underscores instead of hyphens.
   *
   * @returns The code with underscores, for example: en-US becomes en_US.
   */
  public codeUnderscore(): string {
    return this.code.replace('-', '_');
  }
}

@Component({
  selector: 'app-locale-selection',
  templateUrl: './locale-selection.component.html',
  styleUrls: ['./locale-selection.component.css']
})
export class LocaleSelectionComponent implements OnInit {

  public readonly Locales: Locale[] = [
    new Locale('en-US', 'English (US)'),
    new Locale('fr'   , 'Français'),
    new Locale('nl'   , 'Nederlands')
  ];

  constructor(
    @Inject(LOCALE_ID) public readonly currentLocale: string,
    public readonly router: Router
  ) { }

  ngOnInit() {

  }

  /**
   * @param locale The locale to check against.
   * @returns If the locale provided is the current locale of the web page.
   */
  public isCurrentLocale(locale: Locale): boolean {
    return this.currentLocale === locale.code;
  }
}
