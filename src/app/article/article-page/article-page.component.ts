/**
 * @license
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2020  Elypia CIC
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
