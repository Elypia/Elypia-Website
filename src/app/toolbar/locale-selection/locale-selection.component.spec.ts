import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LocaleSelectionComponent} from './locale-selection.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('LocaleSelectionComponent', () => {
  let component: LocaleSelectionComponent;
  let fixture: ComponentFixture<LocaleSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaleSelectionComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
