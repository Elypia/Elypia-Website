import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrandCardComponent} from './brand-card.component';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('BrandCardComponent', () => {
  let component: BrandCardComponent;
  let fixture: ComponentFixture<BrandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BrandCardComponent
      ],
      imports: [
        FontAwesomeTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
