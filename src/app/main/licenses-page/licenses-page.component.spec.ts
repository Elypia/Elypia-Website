import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicensesPageComponent} from './licenses-page.component';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatCardModule} from '@angular/material/card';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LicensesPageComponent', () => {
  let component: LicensesPageComponent;
  let fixture: ComponentFixture<LicensesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LicensesPageComponent
      ],
      imports: [
        MatCardModule,
        HttpClientTestingModule,
        LoggerTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
