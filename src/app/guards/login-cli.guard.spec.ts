import { TestBed } from '@angular/core/testing';

import { LoginCliGuard } from './login-cli.guard';

describe('LoginCliGuard', () => {
  let guard: LoginCliGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginCliGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
