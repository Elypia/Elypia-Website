import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleComponent} from './article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ElyTimestampModule} from '@elypia/elypian-angular';
import { MatIconModule } from '@angular/material/icon';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

describe('ArticlePageComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        RouterTestingModule,
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
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
