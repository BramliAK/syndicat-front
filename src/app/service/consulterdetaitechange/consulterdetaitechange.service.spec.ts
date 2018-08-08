import { TestBed, inject } from '@angular/core/testing';

import { ConsulterdetaitechangeService } from './consulterdetaitechange.service';

describe('ConsulterdetaitechangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsulterdetaitechangeService]
    });
  });

  it('should be created', inject([ConsulterdetaitechangeService], (service: ConsulterdetaitechangeService) => {
    expect(service).toBeTruthy();
  }));
});
