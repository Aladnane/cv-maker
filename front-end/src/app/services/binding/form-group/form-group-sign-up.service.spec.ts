import { TestBed } from '@angular/core/testing';

import { FormGroupSignUpService } from './form-group-sign-up.service';

describe('FormGroupSignUpService', () => {
  let service: FormGroupSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGroupSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
