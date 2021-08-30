import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FkTheorieComponent } from './fk-theorie.component';

describe('FkTheorieComponent', () => {
  let component: FkTheorieComponent;
  let fixture: ComponentFixture<FkTheorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FkTheorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FkTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
