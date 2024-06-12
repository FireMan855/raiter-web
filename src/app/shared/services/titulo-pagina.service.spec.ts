import { TestBed } from '@angular/core/testing';

import { TituloPaginaService } from './titulo-pagina.service';

describe('TituloPaginaService', () => {
  let service: TituloPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
