import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaSmsComponent } from './alpha-sms.component';

describe('AlphaSmsComponent', () => {
  let component: AlphaSmsComponent;
  let fixture: ComponentFixture<AlphaSmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphaSmsComponent]
    });
    fixture = TestBed.createComponent(AlphaSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
