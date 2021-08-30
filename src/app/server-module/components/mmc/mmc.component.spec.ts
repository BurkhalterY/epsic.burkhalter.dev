import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmcComponent } from './mmc.component';

describe('MmcComponent', () => {
  let component: MmcComponent;
  let fixture: ComponentFixture<MmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
