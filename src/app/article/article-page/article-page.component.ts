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

import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';
import {Article, ArticleComment} from '../article';
import {CommentService} from '../comment.service';
import {LoadState} from '@elypia/ng-elypian';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public article: Article;
  public articleState: LoadState = LoadState.NotLoaded;

  public comments: ArticleComment[];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {
    titleService.setTitle(environment.titlePrefix + ' | Article');
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id'))
        return;

      const id: number = Number(paramMap.get('id'));

      this.articleState = LoadState.Loading;
      this.articleService.getSingle(id).subscribe((article) => {
        this.article = article;
        this.articleState = LoadState.Loaded;
      }, () => this.articleState = LoadState.Failed);

      this.commentService.paginate(id, 0).subscribe((comments) => {
        this.comments = comments.content;
      });
    });
  }
}
