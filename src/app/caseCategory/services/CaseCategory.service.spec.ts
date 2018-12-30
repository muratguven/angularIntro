/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaseCategoryService } from './CaseCategory.service';

describe('Service: CaseCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseCategoryService]
    });
  });

  it('should ...', inject([CaseCategoryService], (service: CaseCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
