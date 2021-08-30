import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBaseComponent } from './html-base.component';

describe('HtmlBaseComponent', () => {
  let component: HtmlBaseComponent;
  let fixture: ComponentFixture<HtmlBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
