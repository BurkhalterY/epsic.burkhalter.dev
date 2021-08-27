import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreComponent } from './fenetre.component';

describe('FenetreComponent', () => {
  let component: FenetreComponent;
  let fixture: ComponentFixture<FenetreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FenetreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FenetreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
