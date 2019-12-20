import {TestBed} from '@angular/core/testing';

import {CompaniesHouseService} from './companies-house.service';

describe('CompaniesHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompaniesHouseService = TestBed.inject(CompaniesHouseService);
    expect(service).toBeTruthy();
  });
});
