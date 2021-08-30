import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinHexComponent } from './bin-hex.component';

describe('BinHexComponent', () => {
  let component: BinHexComponent;
  let fixture: ComponentFixture<BinHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
