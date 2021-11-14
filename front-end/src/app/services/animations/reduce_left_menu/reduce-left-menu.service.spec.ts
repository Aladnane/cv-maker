import { TestBed } from '@angular/core/testing';

import { ReduceLeftMenuService } from './reduce-left-menu.service';

describe('ReduceLeftMenuService', () => {
  let service: ReduceLeftMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduceLeftMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
