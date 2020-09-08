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

import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {ElyEqualsModule, ElyLoadableModule, ElyStatefulButtonModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {ArticleModule} from './article/article.module';
import {DonateModule} from './donate/donate.module';
import {ToolbarModule} from './toolbar/toolbar.module';
import {FooterModule} from './footer/footer.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        LoggerTestingModule,
        ArticleModule,
        DonateModule,
        FooterModule,
        ToolbarModule,
        ElyLoadableModule,
        ElyTimestampModule,
        ElyEqualsModule,
        ElyStatefulButtonModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatToolbarModule,
        MatDialogModule
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
