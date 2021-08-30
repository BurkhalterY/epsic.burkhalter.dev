import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMargesComponent } from './css-marges.component';

describe('CssMargesComponent', () => {
  let component: CssMargesComponent;
  let fixture: ComponentFixture<CssMargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssMargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssMargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
