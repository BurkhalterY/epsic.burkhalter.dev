import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionBoucleComponent } from './conversion-boucle.component';

describe('ConversionBoucleComponent', () => {
  let component: ConversionBoucleComponent;
  let fixture: ComponentFixture<ConversionBoucleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionBoucleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionBoucleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
