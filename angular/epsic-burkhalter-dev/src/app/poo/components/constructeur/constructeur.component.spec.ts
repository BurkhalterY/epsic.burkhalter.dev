import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructeurComponent } from './constructeur.component';

describe('ConstructeurComponent', () => {
  let component: ConstructeurComponent;
  let fixture: ComponentFixture<ConstructeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
