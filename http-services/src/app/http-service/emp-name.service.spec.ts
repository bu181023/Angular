import { TestBed } from '@angular/core/testing';

import { EmpNameService } from './emp-name.service';

describe('EmpNameService', () => {
  let service: EmpNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
