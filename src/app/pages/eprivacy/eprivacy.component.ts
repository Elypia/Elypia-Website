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

import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface EprivacyEntry {

  /** What type of data this is, eg cookie, or local storage. */
  type: string;

  /** The name of this data. */
  name: string;

  /** The domain this data is for. */
  domain?: string;

  /** The number of days that this data is alive for. */
  expires?: number;

  /** An explanation on why this exists. */
  description: string;
}

const PRIVACY_DATA: EprivacyEntry[] = [
  {
    type: 'localstorage',
    name: 'theme',
    description: 'Stores the selected theme so it can persist between page visits.'
  },
  {
    type: 'cookie',
    name: '__cfduid',
    domain: '.elypia.org',
    expires: 365,
    description: 'Provided by CloudFlare in order to identify clients, for example, if you\'re ' +
                 'at McDonalds where there could be infected machines, but your machine is trusted ' +
                 '(eg; you completed a challenge), this allows CloudFlare to recognise this and refrain ' +
                 'from challenging you again. It has no relation to anything in our sites nor does ' +
                 'it store any personal information.'
  },
  {
    type: 'cookie',
    name: 'cookieconsent_status',
    domain: '.elypia.org',
    expires: 365,
    description: 'Stores if the cookie consent popup has appeared.'
  },
  {
    type: 'cookie',
    name: '__cfduid, _ga, _gid, locale',
    domain: '.discordapp.com *',
    expires: 365,
    description: 'Get information from CloudFlare and Discord respectively.'
  }
];

@Component({
  selector: 'app-eprivacy',
  templateUrl: './eprivacy.component.html',
  styleUrls: ['./eprivacy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EprivacyComponent {

  columns: string[] = ['type', 'name', 'domain', 'expires', 'description'];
  data = PRIVACY_DATA;
}
