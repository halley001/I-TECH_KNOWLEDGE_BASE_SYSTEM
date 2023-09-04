import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaBankComponent } from './alpha-bank.component';

describe('AlphaBankComponent', () => {
  let component: AlphaBankComponent;
  let fixture: ComponentFixture<AlphaBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaBankComponent]
    });
    fixture = TestBed.createComponent(AlphaBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
