import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriABulleComponent } from './tri-a-bulle.component';

describe('TriABulleComponent', () => {
  let component: TriABulleComponent;
  let fixture: ComponentFixture<TriABulleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriABulleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriABulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
