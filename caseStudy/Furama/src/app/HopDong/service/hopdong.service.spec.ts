import { TestBed } from '@angular/core/testing';

import { HopdongService } from './hopdong.service';

describe('HopdongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HopdongService = TestBed.get(HopdongService);
    expect(service).toBeTruthy();
  });
});
