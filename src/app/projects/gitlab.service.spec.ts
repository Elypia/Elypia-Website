import {TestBed} from '@angular/core/testing';

import {GitlabService} from './gitlab.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GitlabService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: GitlabService = TestBed.inject(GitlabService);
    expect(service).toBeTruthy();
  });
});
