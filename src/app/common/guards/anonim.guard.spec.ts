import { TestBed } from '@angular/core/testing';

import { AnonimGuard } from './anonim.guard';

describe('AnonimGuard', () => {
  let guard: AnonimGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonimGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
