import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoDownloadComponent} from './logo-download.component';

describe('LogoDownloadComponent', () => {
  let component: LogoDownloadComponent;
  let fixture: ComponentFixture<LogoDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
