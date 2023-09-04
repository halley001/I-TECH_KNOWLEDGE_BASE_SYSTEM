import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAlphaComponent } from './virtual-alpha.component';

describe('VirtualAlphaComponent', () => {
  let component: VirtualAlphaComponent;
  let fixture: ComponentFixture<VirtualAlphaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualAlphaComponent]
    });
    fixture = TestBed.createComponent(VirtualAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
