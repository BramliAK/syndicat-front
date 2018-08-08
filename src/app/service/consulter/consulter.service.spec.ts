import { TestBed, inject } from '@angular/core/testing';

import { ConsulterService } from './consulter.service';

describe('ConsulterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsulterService]
    });
  });

  it('should be created', inject([ConsulterService], (service: ConsulterService) => {
    expect(service).toBeTruthy();
  }));
});
