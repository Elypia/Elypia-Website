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
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from './user';
import {catchError, map} from 'rxjs/operators';
import LoginForm from '../toolbar/login-form/login-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  /**
   * If a user with the provided email exists.
   *
   * @param email The email address to lookup.
   */
  public exists(email: string): Observable<boolean> {
    const params: HttpParams = new HttpParams().set('email', email);

    return this.client.get<boolean>(environment.backendEndpoint + 'users/exists', {params})
      .pipe(
        map(() =>  true),
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof ErrorEvent)
            return throwError('Client-side error occured.');

          if (err.status === 404 || err.status === 418)
            return of(false);
        })
      );
  }

  public register(form: LoginForm): Observable<User> {
    return this.client.post<User>(environment.backendEndpoint + 'users/register', form);
  }
}
