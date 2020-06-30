import {TestBed} from '@angular/core/testing';

import {WeblateService} from './weblate.service';

describe('WeblateService', () => {
  let service: WeblateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeblateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
