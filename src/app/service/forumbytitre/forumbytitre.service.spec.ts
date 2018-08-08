import { TestBed, inject } from '@angular/core/testing';

import { ForumbytitreService } from './forumbytitre.service';

describe('ForumbytitreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumbytitreService]
    });
  });

  it('should be created', inject([ForumbytitreService], (service: ForumbytitreService) => {
    expect(service).toBeTruthy();
  }));
});
