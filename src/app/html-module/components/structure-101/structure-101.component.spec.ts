import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Structure101Component } from './structure-101.component';

describe('Structure101Component', () => {
  let component: Structure101Component;
  let fixture: ComponentFixture<Structure101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Structure101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Structure101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
