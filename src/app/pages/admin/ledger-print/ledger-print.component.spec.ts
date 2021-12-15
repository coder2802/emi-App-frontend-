import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerPrintComponent } from './ledger-print.component';

describe('LedgerPrintComponent', () => {
  let component: LedgerPrintComponent;
  let fixture: ComponentFixture<LedgerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
