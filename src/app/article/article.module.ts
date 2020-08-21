/*
 * Copyright 2019-2020 Elypia CIC and Contributors
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article/article.component';
import {ArticlePageComponent} from './article-page/article-page.component';
import {CommentComponent} from './comment/comment.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ElyLoadableModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {MarkdownModule} from 'ngx-markdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticlePageComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ElyTimestampModule,
    MarkdownModule,
    ElyLoadableModule,
    FontAwesomeModule
  ],
  exports: [
    ArticleComponent,
    ArticlePageComponent,
    CommentComponent
  ],
})
export class ArticleModule { }
