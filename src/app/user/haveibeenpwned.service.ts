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
