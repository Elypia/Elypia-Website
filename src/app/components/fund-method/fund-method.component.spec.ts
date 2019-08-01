import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FundMethodComponent} from './fund-method.component';
import {MatCardModule} from '@angular/material';

describe('FundMethodComponent', () => {
  let component: FundMethodComponent;
  let fixture: ComponentFixture<FundMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundMethodComponent ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
