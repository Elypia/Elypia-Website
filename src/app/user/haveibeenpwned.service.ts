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

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class PwnedPassword {

  hash: string;
  occurences: number;

  constructor(req: string, pwned: string) {
    const split: string[] = pwned.split(':');
    this.hash = req + split[0];
    this.occurences = Number(split[1]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class HaveibeenpwnedService {

  private static readonly BaseUrl: string = 'https://haveibeenpwned.com/api/v3/';
  private static readonly Version: HttpHeaders = new HttpHeaders()
    .set('user-agent', 'Elypia Website - Checking if new password appears breached database.');

  private static lastCheck: number = Date.now();

  constructor(private client: HttpClient) { }
}
