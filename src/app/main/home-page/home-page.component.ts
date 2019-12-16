/**
 * @license
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
import {ArticleService} from '../../article/article.service';
import {Article} from '../../article/article';
import {LoadState} from '@elypia/ng-elypian';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public articles: Article[];
  public state: LoadState;

  constructor(
    private titleService: Title,
    private articleService: ArticleService
  ) {
    titleService.setTitle(environment.titlePrefix);
    this.state = LoadState.NotLoaded;
  }

  ngOnInit() {
    this.state = LoadState.Loading;

    // this.articleService.getRecent().subscribe((articles) => {
    //   this.articles = articles;
    //   this.state = LoadState.Loaded;
    // }, () => this.state = LoadState.Failed);
  }
}
