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
