import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article/article.component';
import {ArticlePageComponent} from './article-page/article-page.component';
import {CommentComponent} from './comment/comment.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ElyLoadableModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {MatIconModule} from '@angular/material/icon';
import {MarkdownModule} from 'ngx-markdown';

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
    MatIconModule,
    MarkdownModule,
    ElyLoadableModule
  ],
  exports: [
    ArticleComponent,
    ArticlePageComponent,
    CommentComponent
  ],
})
export class ArticleModule { }
