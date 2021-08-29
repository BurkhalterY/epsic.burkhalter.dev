import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSelectComponent } from './sql-select.component';

describe('SqlSelectComponent', () => {
  let component: SqlSelectComponent;
  let fixture: ComponentFixture<SqlSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
