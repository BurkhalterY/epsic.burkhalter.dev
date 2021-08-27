import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateurSrComponent } from './calculateur-sr.component';

describe('CalculateurSrComponent', () => {
  let component: CalculateurSrComponent;
  let fixture: ComponentFixture<CalculateurSrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateurSrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateurSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
