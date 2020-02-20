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

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Article} from './article';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private client: HttpClient) { }

  public getSingle(id: number): Observable<Article> {
    const params: HttpParams = new HttpParams().set('id', id.toString());
    return this.client.get<Article>(environment.baseUrl + 'articles/single', {params});
  }

  public getRecent(): Observable<Article[]> {
    return this.client.get<Article[]>(environment.baseUrl + 'articles/recent');
  }
}
