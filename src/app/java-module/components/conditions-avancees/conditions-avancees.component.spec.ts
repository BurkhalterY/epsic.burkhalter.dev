import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsAvanceesComponent } from './conditions-avancees.component';

describe('ConditionsAvanceesComponent', () => {
  let component: ConditionsAvanceesComponent;
  let fixture: ComponentFixture<ConditionsAvanceesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsAvanceesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsAvanceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
