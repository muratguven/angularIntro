/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalservicetestService } from './localservicetest.service';

describe('Service: Localservicetest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalservicetestService]
    });
  });

  it('should ...', inject([LocalservicetestService], (service: LocalservicetestService) => {
    expect(service).toBeTruthy();
  }));
});
