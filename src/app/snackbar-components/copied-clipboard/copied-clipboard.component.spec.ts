import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CopiedClipboardComponent} from './copied-clipboard.component';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';

describe('CopiedClipboardComponent', () => {
  let component: CopiedClipboardComponent;
  let fixture: ComponentFixture<CopiedClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiedClipboardComponent ],
      imports: [
        FontAwesomeTestingModule
      ]
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
