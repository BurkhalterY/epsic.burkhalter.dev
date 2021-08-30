import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativComponent } from './negativ.component';

describe('NegativComponent', () => {
  let component: NegativComponent;
  let fixture: ComponentFixture<NegativComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
