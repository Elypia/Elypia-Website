import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ElyLoadableModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {ArticleComponent} from '../../components/article/article.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatIconModule} from '@angular/material/icon';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ArticleComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        MatIconModule,
        ElyLoadableModule,
        ElyTimestampModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
