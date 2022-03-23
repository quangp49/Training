import { TestBed } from '@angular/core/testing';

import { SysServiceService } from './sys-service.service';

describe('SysServiceService', () => {
  let service: SysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
