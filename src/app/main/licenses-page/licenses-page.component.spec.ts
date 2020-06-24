import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LicensesPageComponent} from './licenses-page.component';
import {HttpClientModule} from '@angular/common/http';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {MatCardModule} from '@angular/material/card';

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
        HttpClientModule,
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
