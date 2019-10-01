import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmotesComponent} from './emotes.component';

describe('EmotesComponent', () => {
  let component: EmotesComponent;
  let fixture: ComponentFixture<EmotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
