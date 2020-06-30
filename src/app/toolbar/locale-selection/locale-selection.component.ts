/*
 * Copyright 2019-2020 Elypia CIC
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

import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageStatistics, WeblateService} from '../weblate.service';

/**
 * Described a locale that the website can be displayed.
 */
class Locale {

  /** The user friendly name. */
  displayName: string;

  /**
   * The code for this locale, this could be either language,
   * or language and location.
   */
  code: string;

  /** The language code is stored in Weblate. */
  weblateCode: string;

  constructor(displayName: string, code: string, weblateCode: string = code) {
    this.displayName = displayName;
    this.code = code;
    this.weblateCode = weblateCode;
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
    new Locale('Bosanski (Latinski)', 'bs-Latn', 'bs_Latn'),
    new Locale('English (Simple)', 'en-Simple', 'en_Simple'),
    new Locale('English (US)', 'en-US', 'en'),
    new Locale('Français', 'fr'),
    new Locale('Nederlands', 'nl'),
    new Locale('Polski', 'pl')
  ];

  /**
   * The selected locale in he {@link LocaleSelectionComponent}.
   * This is not the same as the {@link currentLocale}.
   */
  public selectedLocale: Locale;

  /** All language statistics for the website on Weblate. */
  public languageStatistics: LanguageStatistics[];

  constructor(
    @Inject(LOCALE_ID) public readonly currentLocale: string,
    public readonly router: Router,
    private readonly weblateService: WeblateService
  ) {
    this.selectedLocale = this.Locales.find((locale) => currentLocale === locale.code);
  }

  public ngOnInit() {
    this.weblateService.getProjectLanguageStatistics('elypia-website').subscribe((languageStatistics) => {
      this.languageStatistics = languageStatistics;
    });
  }

  /**
   * @param locale The locale to check against.
   * @returns If the locale provided is the current locale of the web page.
   */
  public isCurrentLocale(locale: Locale): boolean {
    return this.currentLocale === locale.code;
  }

  public getPercentageTranslated(locale: Locale): number {
    return this.languageStatistics.find((stats) =>
      stats.languageCode === locale.weblateCode
    ).translatedStringsPercentage;
  }
}
