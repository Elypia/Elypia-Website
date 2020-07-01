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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ArticlePageComponent} from './article-page.component';
import {ElyLoadableModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {ArticleComponent} from '../article/article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommentComponent} from '../comment/comment.component';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

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
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        HttpClientTestingModule,
        RouterTestingModule,
        CommonModule,
        MatExpansionModule,
        ElyLoadableModule,
        ElyTimestampModule,
        FontAwesomeTestingModule
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
