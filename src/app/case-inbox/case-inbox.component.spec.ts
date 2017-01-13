/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaseInboxComponent } from './case-inbox.component';

describe('CaseInboxComponent', () => {
  let component: CaseInboxComponent;
  let fixture: ComponentFixture<CaseInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
