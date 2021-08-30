import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculSousReseauxComponent } from './calcul-sous-reseaux.component';

describe('CalculSousReseauxComponent', () => {
  let component: CalculSousReseauxComponent;
  let fixture: ComponentFixture<CalculSousReseauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculSousReseauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculSousReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
