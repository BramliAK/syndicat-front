import { TestBed, inject } from '@angular/core/testing';

import { VenteService } from './vente.service';

describe('VenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VenteService]
    });
  });

  it('should be created', inject([VenteService], (service: VenteService) => {
    expect(service).toBeTruthy();
  }));
});
