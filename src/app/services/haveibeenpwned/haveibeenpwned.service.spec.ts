import {TestBed} from '@angular/core/testing';

import {HaveibeenpwnedService} from './haveibeenpwned.service';
import {HttpClientModule} from '@angular/common/http';

describe('HaveibeenpwnedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: HaveibeenpwnedService = TestBed.get(HaveibeenpwnedService);
    expect(service).toBeTruthy();
  });
});
