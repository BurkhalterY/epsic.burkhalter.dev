import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionsLogiquesComponent } from './fonctions-logiques.component';

describe('FonctionsLogiquesComponent', () => {
  let component: FonctionsLogiquesComponent;
  let fixture: ComponentFixture<FonctionsLogiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionsLogiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionsLogiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
