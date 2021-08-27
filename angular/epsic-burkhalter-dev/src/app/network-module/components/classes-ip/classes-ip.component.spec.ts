import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesIpComponent } from './classes-ip.component';

describe('ClassesIpComponent', () => {
  let component: ClassesIpComponent;
  let fixture: ComponentFixture<ClassesIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesIpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
