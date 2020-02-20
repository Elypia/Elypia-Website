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
import {Observable} from 'rxjs';
import {Slice} from '../main/slice';
import {environment} from '../../environments/environment';
import {ArticleComment} from './article';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private client: HttpClient) { }

  public paginate(articleId: number, page: number = 0): Observable<Slice<ArticleComment[]>> {
    const params: HttpParams = new HttpParams()
      .set('articleId', articleId.toString())
      .set('page', page.toString());

    return this.client.get<Slice<ArticleComment[]>>(environment.baseUrl + 'comments/paginate', {params});
  }
}
