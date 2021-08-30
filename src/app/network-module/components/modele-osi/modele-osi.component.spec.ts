import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleOsiComponent } from './modele-osi.component';

describe('ModeleOsiComponent', () => {
  let component: ModeleOsiComponent;
  let fixture: ComponentFixture<ModeleOsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleOsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleOsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
