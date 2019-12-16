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

/**
 * @author seth@elypia.org (Seth Falco)
 */
export class PwnedPassword {

  hash: string;
  occurences: number;

  constructor(req: string, pwned: string) {
    const split: string[] = pwned.split(':');
    this.hash = req + split[0];
    this.occurences = Number(split[1]);
  }
}

/**
 * @author seth@elypia.org (Seth Falco)
 */
@Injectable({
  providedIn: 'root'
})
export class HaveibeenpwnedService {

  private static readonly BaseUrl: string = 'https://api.pwnedpasswords.com/';
  private static readonly Version: HttpHeaders = new HttpHeaders().set('api-version', '2');

  private static lastCheck: number = Date.now();

  constructor(private client: HttpClient) { }

  // public isBreached(password: string): Observable<PwnedPassword | null> {
  //   const now: number = Date.now();
  //
  //   if (now - HaveibeenpwnedService.lastCheck <= 1500)
  //     of(null);
  //
  //   HaveibeenpwnedService.lastCheck = now;
  //
  //   const hash: string = sha1(password);
  //   const req: string = hash.slice(0, 5);
  //   const rest: string = hash.slice(5);
  //
  //   return this.client.get<string>(
  //     HaveibeenpwnedService.BaseUrl + `range/${req}`,
  //     {headers: HaveibeenpwnedService.Version}
  //   ).pipe(
  //     map((response) => {
  //       const matches: string[] = response.split('\s+');
  //
  //       for (const match of matches) {
  //         const pwn = new PwnedPassword(req, match);
  //
  //         if (rest === pwn.hash)
  //           return pwn;
  //       }
  //
  //       return null;
  //     })
  //   );
  // }
}
