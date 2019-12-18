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
