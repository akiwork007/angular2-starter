/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchCaseService } from './search-case.service';

describe('SearchCaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCaseService]
    });
  });

  it('should ...', inject([SearchCaseService], (service: SearchCaseService) => {
    expect(service).toBeTruthy();
  }));
});
