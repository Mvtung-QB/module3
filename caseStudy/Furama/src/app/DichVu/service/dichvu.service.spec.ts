import { TestBed } from '@angular/core/testing';

import { DichvuService } from './dichvu.service';

describe('DichvuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DichvuService = TestBed.get(DichvuService);
    expect(service).toBeTruthy();
  });
});
