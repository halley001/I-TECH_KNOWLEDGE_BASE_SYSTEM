import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaMobileComponent } from './alpha-mobile.component';

describe('AlphaMobileComponent', () => {
  let component: AlphaMobileComponent;
  let fixture: ComponentFixture<AlphaMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaMobileComponent]
    });
    fixture = TestBed.createComponent(AlphaMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
