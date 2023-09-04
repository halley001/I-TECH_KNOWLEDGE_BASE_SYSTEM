import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaReportComponent } from './alpha-report.component';

describe('AlphaReportComponent', () => {
  let component: AlphaReportComponent;
  let fixture: ComponentFixture<AlphaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaReportComponent]
    });
    fixture = TestBed.createComponent(AlphaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
