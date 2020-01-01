import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsscreenComponent } from './analyticsscreen.component';

describe('AnalyticsscreenComponent', () => {
  let component: AnalyticsscreenComponent;
  let fixture: ComponentFixture<AnalyticsscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
