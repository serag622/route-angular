import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canNavigateGuard } from './can-navigate.guard';

describe('canNavigateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canNavigateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
