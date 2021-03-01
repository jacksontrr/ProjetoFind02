import { TestBed } from '@angular/core/testing';

import { AuthcGuard } from './authc.guard';

describe('AuthcGuard', () => {
  let guard: AuthcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
