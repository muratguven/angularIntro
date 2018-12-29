/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommentsServiceService } from './commentsService.service';

describe('Service: CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsServiceService]
    });
  });

  it('should ...', inject([CommentsServiceService], (service: CommentsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
