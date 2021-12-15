import { TestBed } from '@angular/core/testing';

import { SalesitemsService } from './salesitems.service';

describe('SalesitemsService', () => {
  let service: SalesitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
