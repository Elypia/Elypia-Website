import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompanyColorComponent} from './company-color.component';

describe('ColorComponent', () => {
  let component: CompanyColorComponent;
  let fixture: ComponentFixture<CompanyColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
