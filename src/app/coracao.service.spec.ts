import { TestBed } from '@angular/core/testing';

import { CoracaoService } from './coracao.service';

describe('CoracaoService', () => {
  let service: CoracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
