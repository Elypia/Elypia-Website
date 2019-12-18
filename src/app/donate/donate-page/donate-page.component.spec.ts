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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DonatePageComponent} from './donate-page.component';
import {DonateMethodComponent} from '../donate-method/donate-method.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('DonatePageComponent', () => {
  let component: DonatePageComponent;
  let fixture: ComponentFixture<DonatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DonatePageComponent,
        DonateMethodComponent
      ],
      imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        FontAwesomeTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
