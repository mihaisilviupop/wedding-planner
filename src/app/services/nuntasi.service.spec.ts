import { TestBed, inject } from '@angular/core/testing';

import { NuntasiService } from './nuntasi.service';

describe('NuntasiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuntasiService]
    });
  });

  it('should be created', inject([NuntasiService], (service: NuntasiService) => {
    expect(service).toBeTruthy();
  }));
});
