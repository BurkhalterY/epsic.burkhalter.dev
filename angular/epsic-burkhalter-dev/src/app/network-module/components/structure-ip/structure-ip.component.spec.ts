import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureIpComponent } from './structure-ip.component';

describe('StructureIpComponent', () => {
  let component: StructureIpComponent;
  let fixture: ComponentFixture<StructureIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureIpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
