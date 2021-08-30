import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideSiComponent } from './valide-si.component';

describe('ValideSiComponent', () => {
  let component: ValideSiComponent;
  let fixture: ComponentFixture<ValideSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
