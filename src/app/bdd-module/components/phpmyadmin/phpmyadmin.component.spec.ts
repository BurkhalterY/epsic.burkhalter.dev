import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpmyadminComponent } from './phpmyadmin.component';

describe('PhpmyadminComponent', () => {
  let component: PhpmyadminComponent;
  let fixture: ComponentFixture<PhpmyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpmyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpmyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
