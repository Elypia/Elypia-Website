import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MobileToolbarMenuComponent} from './mobile-toolbar-menu.component';

describe('MobileToolbarMenuComponent', () => {
  let component: MobileToolbarMenuComponent;
  let fixture: ComponentFixture<MobileToolbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileToolbarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileToolbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
