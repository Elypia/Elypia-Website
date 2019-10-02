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

import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article/article.service';
import {Article} from '../../services/article/article';
import {LoadState} from '@elypia/ng-elypian';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles: Article[];
  public state: LoadState;

  constructor(
    private articleService: ArticleService
  ) {
    this.state = LoadState.NotLoaded;
  }

  ngOnInit() {
    this.state = LoadState.Loading;

    this.articleService.getRecent().subscribe((articles) => {
      this.articles = articles;
      this.state = LoadState.Loaded;
    }, () => this.state = LoadState.Failed);
  }
}
