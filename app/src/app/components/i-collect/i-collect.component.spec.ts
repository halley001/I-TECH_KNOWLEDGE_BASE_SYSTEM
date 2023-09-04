import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICollectComponent } from './i-collect.component';

describe('ICollectComponent', () => {
  let component: ICollectComponent;
  let fixture: ComponentFixture<ICollectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ICollectComponent]
    });
    fixture = TestBed.createComponent(ICollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
