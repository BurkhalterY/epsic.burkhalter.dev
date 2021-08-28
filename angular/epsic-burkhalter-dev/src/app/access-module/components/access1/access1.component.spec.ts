import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Access1Component } from './access1.component';

describe('Access1Component', () => {
  let component: Access1Component;
  let fixture: ComponentFixture<Access1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Access1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Access1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
