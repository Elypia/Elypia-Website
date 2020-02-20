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

import {ArticleComponent} from './article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ElyTimestampModule} from '@elypia/ng-elypian';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ElyTimestampModule,
        MatExpansionModule,
        FontAwesomeTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
