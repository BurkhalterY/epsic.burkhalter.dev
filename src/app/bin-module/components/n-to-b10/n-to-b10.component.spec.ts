import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NToB10Component } from './n-to-b10.component';

describe('NToB10Component', () => {
  let component: NToB10Component;
  let fixture: ComponentFixture<NToB10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NToB10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NToB10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
