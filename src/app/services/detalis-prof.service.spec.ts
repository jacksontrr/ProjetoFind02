import { TestBed } from '@angular/core/testing';

import { DetalisProfService } from './detalis-prof.service';

describe('DetalisProfService', () => {
  let service: DetalisProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalisProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
