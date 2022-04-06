import { TestBed } from '@angular/core/testing';

import { NetlifyformsService } from './netlifyforms.service';

describe('NetlifyformsService', () => {
  let service: NetlifyformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetlifyformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
