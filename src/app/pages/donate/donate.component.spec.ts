import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DonateComponent} from './donate.component';
import {FundMethodComponent} from '../../components/fund-method/fund-method.component';
import {MatCardModule} from '@angular/material';

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DonateComponent,
        FundMethodComponent
      ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
