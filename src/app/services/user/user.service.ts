import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../../classes/user';
import {catchError, map} from 'rxjs/operators';
import LoginForm from '../../dialogs/login-form/login-form';

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
