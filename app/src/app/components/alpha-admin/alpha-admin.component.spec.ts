import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaAdminComponent } from './alpha-admin.component';

describe('AlphaAdminComponent', () => {
  let component: AlphaAdminComponent;
  let fixture: ComponentFixture<AlphaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaAdminComponent]
    });
    fixture = TestBed.createComponent(AlphaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
