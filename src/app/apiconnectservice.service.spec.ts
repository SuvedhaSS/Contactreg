import { TestBed } from '@angular/core/testing';

import { APIconnectserviceService } from './apiconnectservice.service';

describe('APIconnectserviceService', () => {
  let service: APIconnectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIconnectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
