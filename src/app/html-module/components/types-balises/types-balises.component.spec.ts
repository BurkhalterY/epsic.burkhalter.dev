import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesBalisesComponent } from './types-balises.component';

describe('TypesBalisesComponent', () => {
  let component: TypesBalisesComponent;
  let fixture: ComponentFixture<TypesBalisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesBalisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesBalisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
