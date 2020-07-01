import {TestBed} from '@angular/core/testing';

import {WeblateService} from './weblate.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WeblateService', () => {
  let service: WeblateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WeblateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
