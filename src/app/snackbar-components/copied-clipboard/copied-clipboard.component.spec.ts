/*
 * Copyright 2019-2020 Elypia CIC
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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CopiedClipboardComponent} from './copied-clipboard.component';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('CopiedClipboardComponent', () => {
  let component: CopiedClipboardComponent;
  let fixture: ComponentFixture<CopiedClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiedClipboardComponent ],
      imports: [
        FontAwesomeTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiedClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
