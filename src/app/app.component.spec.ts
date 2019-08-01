import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule} from '@angular/material/button';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatCardModule, MatIconModule, MatMenuModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {SocialComponent} from './components/social/social.component';
import {LoggerTestingModule} from 'ngx-logger/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
        SocialComponent
      ],
      imports: [
        MatButtonModule,
        RouterTestingModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        MatToolbarModule,
        LoggerTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
