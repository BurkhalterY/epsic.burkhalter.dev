import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlZoneListeComponent } from './control-zone-liste.component';

describe('ControlZoneListeComponent', () => {
  let component: ControlZoneListeComponent;
  let fixture: ComponentFixture<ControlZoneListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlZoneListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlZoneListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
