import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesDeroulantesComponent } from './listes-deroulantes.component';

describe('ListesDeroulantesComponent', () => {
  let component: ListesDeroulantesComponent;
  let fixture: ComponentFixture<ListesDeroulantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesDeroulantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesDeroulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
