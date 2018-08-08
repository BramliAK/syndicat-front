import { TestBed, inject } from '@angular/core/testing';

import { EchangeService } from './echange.service';

describe('EchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchangeService]
    });
  });

  it('should be created', inject([EchangeService], (service: EchangeService) => {
    expect(service).toBeTruthy();
  }));
});
