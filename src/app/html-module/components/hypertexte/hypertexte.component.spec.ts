import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypertexteComponent } from './hypertexte.component';

describe('HypertexteComponent', () => {
  let component: HypertexteComponent;
  let fixture: ComponentFixture<HypertexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypertexteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HypertexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
