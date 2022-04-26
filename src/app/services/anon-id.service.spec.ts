import { TestBed } from '@angular/core/testing';

import { AnonIdService } from './anon-id.service';

describe('AnonIdService', () => {
  let service: AnonIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnonIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
