import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaMicrofinanceComponent } from './alpha-microfinance.component';

describe('AlphaMicrofinanceComponent', () => {
  let component: AlphaMicrofinanceComponent;
  let fixture: ComponentFixture<AlphaMicrofinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaMicrofinanceComponent]
    });
    fixture = TestBed.createComponent(AlphaMicrofinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
