import { TestBed } from '@angular/core/testing';

import { CvInfoService } from './cv-info.service';

describe('CvInfoService', () => {
  let service: CvInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
