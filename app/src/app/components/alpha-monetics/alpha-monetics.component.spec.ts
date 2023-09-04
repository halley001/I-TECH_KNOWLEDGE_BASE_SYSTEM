import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaMoneticsComponent } from './alpha-monetics.component';

describe('AlphaMoneticsComponent', () => {
  let component: AlphaMoneticsComponent;
  let fixture: ComponentFixture<AlphaMoneticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaMoneticsComponent]
    });
    fixture = TestBed.createComponent(AlphaMoneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
