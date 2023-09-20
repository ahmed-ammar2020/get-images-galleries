import { TestBed } from '@angular/core/testing';

import { ReqsService } from './reqs.service';

describe('ReqsService', () => {
  let service: ReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
