import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructogrammeComponent } from './structogramme.component';

describe('StructogrammeComponent', () => {
  let component: StructogrammeComponent;
  let fixture: ComponentFixture<StructogrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructogrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
