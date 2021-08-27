import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportsTransmissionComponent } from './supports-transmission.component';

describe('SupportsTransmissionComponent', () => {
  let component: SupportsTransmissionComponent;
  let fixture: ComponentFixture<SupportsTransmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportsTransmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportsTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
