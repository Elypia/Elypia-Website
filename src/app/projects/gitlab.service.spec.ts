import {TestBed} from '@angular/core/testing';

import {GitlabService} from './gitlab.service';
import {HttpClientModule} from '@angular/common/http';

describe('GitlabService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: GitlabService = TestBed.inject(GitlabService);
    expect(service).toBeTruthy();
  });
});
