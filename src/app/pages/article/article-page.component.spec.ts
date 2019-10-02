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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ArticlePageComponent} from './article-page.component';
import {ElyLoadableModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {ArticleComponent} from '../../components/article/article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommentComponent} from '../../components/comment/comment.component';
import {MatIconModule} from '@angular/material/icon';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlePageComponent,
        ArticleComponent,
        CommentComponent
      ],
      imports: [
        RouterTestingModule,
        ElyLoadableModule,
        ElyTimestampModule,
        MatIconModule,
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        HttpClientModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
