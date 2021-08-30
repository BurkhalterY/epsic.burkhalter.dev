import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbaComponent } from './vba.component';

describe('VbaComponent', () => {
  let component: VbaComponent;
  let fixture: ComponentFixture<VbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
