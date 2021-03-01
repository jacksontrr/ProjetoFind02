import { TestBed } from '@angular/core/testing';

import { AuthcService } from './authc.service';

describe('AuthcService', () => {
  let service: AuthcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
