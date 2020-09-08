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

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DonateMethodComponent} from './donate-method.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('DonateMethodComponent', () => {
  let component: DonateMethodComponent;
  let fixture: ComponentFixture<DonateMethodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateMethodComponent ],
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
    fixture = TestBed.createComponent(DonateMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
