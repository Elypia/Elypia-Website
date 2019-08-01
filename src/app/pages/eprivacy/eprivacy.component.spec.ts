import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EprivacyComponent} from './eprivacy.component';
import {MatTableModule} from '@angular/material';

describe('EprivacyComponent', () => {
  let component: EprivacyComponent;
  let fixture: ComponentFixture<EprivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EprivacyComponent ],
      imports: [
        MatTableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
