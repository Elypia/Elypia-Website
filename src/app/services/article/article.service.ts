import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Article} from './article';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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
