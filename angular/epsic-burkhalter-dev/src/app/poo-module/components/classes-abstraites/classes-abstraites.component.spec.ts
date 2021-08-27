import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesAbstraitesComponent } from './classes-abstraites.component';

describe('ClassesAbstraitesComponent', () => {
  let component: ClassesAbstraitesComponent;
  let fixture: ComponentFixture<ClassesAbstraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesAbstraitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesAbstraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
