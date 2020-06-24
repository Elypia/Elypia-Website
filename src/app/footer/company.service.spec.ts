import {TestBed} from '@angular/core/testing';

import {CompanyService} from './company.service';
import {HttpClientModule} from '@angular/common/http';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CompanyService = TestBed.inject(CompanyService);
    expect(service).toBeTruthy();
  });
});
