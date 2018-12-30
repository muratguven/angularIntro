/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductcategoryService } from './productcategory.service';

describe('Service: Productcategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductcategoryService]
    });
  });

  it('should ...', inject([ProductcategoryService], (service: ProductcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
