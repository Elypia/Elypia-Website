import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrandCardComponent} from './brand-card.component';

describe('LogoDownloadComponent', () => {
  let component: BrandCardComponent;
  let fixture: ComponentFixture<BrandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCardComponent ]
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
