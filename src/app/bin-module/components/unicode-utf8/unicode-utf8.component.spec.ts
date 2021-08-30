import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicodeUtf8Component } from './unicode-utf8.component';

describe('UnicodeUtf8Component', () => {
  let component: UnicodeUtf8Component;
  let fixture: ComponentFixture<UnicodeUtf8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicodeUtf8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicodeUtf8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
