import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B10ToNComponent } from './b10-to-n.component';

describe('B10ToNComponent', () => {
  let component: B10ToNComponent;
  let fixture: ComponentFixture<B10ToNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B10ToNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B10ToNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
