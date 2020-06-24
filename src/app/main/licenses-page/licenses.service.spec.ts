import {TestBed} from '@angular/core/testing';

import {LicensesService} from './licenses.service';
import {HttpClientModule} from '@angular/common/http';

describe('LicensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LicensesService = TestBed.inject(LicensesService);
    expect(service).toBeTruthy();
  });
});
