import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyoutlineComponent } from './bodyoutline.component';

describe('BodyoutlineComponent', () => {
  let component: BodyoutlineComponent;
  let fixture: ComponentFixture<BodyoutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyoutlineComponent]
    });
    fixture = TestBed.createComponent(BodyoutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
