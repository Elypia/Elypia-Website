import {TestBed} from '@angular/core/testing';

import {LicensesService} from './licenses.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LicensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: LicensesService = TestBed.inject(LicensesService);
    expect(service).toBeTruthy();
  });
});
