import { TestBed, inject } from '@angular/core/testing';

import { ConsulterdetaiventeService } from './consulterdetaivente.service';

describe('ConsulterdetaiventeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsulterdetaiventeService]
    });
  });

  it('should be created', inject([ConsulterdetaiventeService], (service: ConsulterdetaiventeService) => {
    expect(service).toBeTruthy();
  }));
});
