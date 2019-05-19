import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleComment} from '../../classes/articleComment';
import {Slice} from '../../classes/spring/slice';
import {environment} from '../../../environments/environment';

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
