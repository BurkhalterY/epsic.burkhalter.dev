import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignEthernetComponent } from './design-ethernet.component';

describe('DesignEthernetComponent', () => {
  let component: DesignEthernetComponent;
  let fixture: ComponentFixture<DesignEthernetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignEthernetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignEthernetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
