import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmipayDialogComponent } from './emipay-dialog.component';

describe('EmipayDialogComponent', () => {
  let component: EmipayDialogComponent;
  let fixture: ComponentFixture<EmipayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmipayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmipayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
