/**
 * @license
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

import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

export enum StorageType {
  Local = 'localstorage',
  Session = 'sessionstorage'
}

export interface CookieTableEntry {

  /** The name of this data. */
  name: string;

  /** The domain this data is for. */
  domain: string;

  /** The number of days that this data is alive for. */
  expires: number;

  /** An explanation on why this exists. */
  description: string;
}

export interface StorageTableEntry {

  /** The name of this data. */
  name: string;

  /** The type of storage data this represents. */
  type: StorageType;

  /** An explanation on why this exists. */
  description: string;
}

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'The privacy policy is for you to know what information we collect and why, ' +
             'and also what how we use cookies and what types of cookies we use.'
  };

  public readonly cookieColumns: string[] = ['name', 'domain', 'expires', 'description'];
  public readonly storageColumns: string[] = ['name', 'type', 'description'];
  public readonly CookieData: CookieTableEntry[] = [
    {
      name: '__cfduid',
      domain: '.elypia.org',
      expires: 365,
      description:
        'Provided by CloudFlare in order to identify clients, for example, if you\'re ' +
        'at McDonalds where there could be infected machines, but your machine is trusted ' +
        '(eg; you completed a challenge), this allows CloudFlare to recognise this and refrain ' +
        'from challenging you again. It has no relation to anything in our sites nor does ' +
        'it store any personal information.'
    }
  ];
  public readonly StorageData: StorageTableEntry[] = [
    {
      name: 'theme',
      type: StorageType.Local,
      description: 'Stores the selected theme so it can persist between page visits.'
    }
  ];

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle(environment.titlePrefix + ' | Privacy');
    meta.updateTag(PrivacyPageComponent.Description);
  }
}
