import {TestBed} from '@angular/core/testing';

import {CommentService} from './comment.service';
import {HttpClientModule} from '@angular/common/http';

describe('CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});
