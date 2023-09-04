import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaWebComponent } from './alpha-web.component';

describe('AlphaWebComponent', () => {
  let component: AlphaWebComponent;
  let fixture: ComponentFixture<AlphaWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaWebComponent]
    });
    fixture = TestBed.createComponent(AlphaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
