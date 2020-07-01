import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PercentageComponent} from './percentage.component';
import {LoggerTestingModule} from 'ngx-logger/testing';

describe('PercentageComponent', () => {
  let component: PercentageComponent;
  let fixture: ComponentFixture<PercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PercentageComponent
      ],
      imports: [
        LoggerTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});