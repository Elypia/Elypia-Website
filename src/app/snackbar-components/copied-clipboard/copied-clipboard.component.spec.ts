import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CopiedClipboardComponent} from './copied-clipboard.component';

describe('CopiedClipboardComponent', () => {
  let component: CopiedClipboardComponent;
  let fixture: ComponentFixture<CopiedClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiedClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiedClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
