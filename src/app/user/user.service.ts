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

    return this.client.get<boolean>(environment.baseUrl + 'users/exists', {params})
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
    return this.client.post<User>(environment.baseUrl + 'users/register', form);
  }
}
