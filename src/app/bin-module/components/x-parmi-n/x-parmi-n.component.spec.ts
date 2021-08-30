import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XParmiNComponent } from './x-parmi-n.component';

describe('XParmiNComponent', () => {
  let component: XParmiNComponent;
  let fixture: ComponentFixture<XParmiNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XParmiNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XParmiNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
