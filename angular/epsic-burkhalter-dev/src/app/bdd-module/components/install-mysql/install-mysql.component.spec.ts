import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallMysqlComponent } from './install-mysql.component';

describe('InstallMysqlComponent', () => {
  let component: InstallMysqlComponent;
  let fixture: ComponentFixture<InstallMysqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallMysqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
