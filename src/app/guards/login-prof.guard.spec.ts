import { TestBed } from '@angular/core/testing';

import { LoginProfGuard } from './login-prof.guard';

describe('LoginProfGuard', () => {
  let guard: LoginProfGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginProfGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
