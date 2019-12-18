/**
 * @license
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2019  Elypia CIC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {async, TestBed} from '@angular/core/testing';
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
  beforeEach(async(() => {
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
