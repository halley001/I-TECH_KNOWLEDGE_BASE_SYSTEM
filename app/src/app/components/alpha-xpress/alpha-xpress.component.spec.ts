import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaXpressComponent } from './alpha-xpress.component';

describe('AlphaXpressComponent', () => {
  let component: AlphaXpressComponent;
  let fixture: ComponentFixture<AlphaXpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaXpressComponent]
    });
    fixture = TestBed.createComponent(AlphaXpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
