import { TestBed } from '@angular/core/testing';

import { DetalisCliService } from './detalis-cli.service';

describe('DetalisCliService', () => {
  let service: DetalisCliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalisCliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
