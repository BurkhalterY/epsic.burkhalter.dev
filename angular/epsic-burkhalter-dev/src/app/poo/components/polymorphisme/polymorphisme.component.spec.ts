import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismeComponent } from './polymorphisme.component';

describe('PolymorphismeComponent', () => {
  let component: PolymorphismeComponent;
  let fixture: ComponentFixture<PolymorphismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolymorphismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolymorphismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
