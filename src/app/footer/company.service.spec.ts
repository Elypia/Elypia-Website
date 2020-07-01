import {TestBed} from '@angular/core/testing';

import {CompanyService} from './company.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CompanyService = TestBed.inject(CompanyService);
    expect(service).toBeTruthy();
  });
});
