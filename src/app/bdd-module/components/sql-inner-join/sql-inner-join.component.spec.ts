import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlInnerJoinComponent } from './sql-inner-join.component';

describe('SqlInnerJoinComponent', () => {
  let component: SqlInnerJoinComponent;
  let fixture: ComponentFixture<SqlInnerJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlInnerJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlInnerJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
