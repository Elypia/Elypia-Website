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
