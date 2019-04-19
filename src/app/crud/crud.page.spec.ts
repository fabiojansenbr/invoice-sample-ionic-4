import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDPage } from './crud.page';

describe('CRUDPage', () => {
  let component: CRUDPage;
  let fixture: ComponentFixture<CRUDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
