import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtenduesTopologiesComponent } from './etendues-topologies.component';

describe('EtenduesTopologiesComponent', () => {
  let component: EtenduesTopologiesComponent;
  let fixture: ComponentFixture<EtenduesTopologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtenduesTopologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtenduesTopologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
