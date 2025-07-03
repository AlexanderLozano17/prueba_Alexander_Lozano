import { TestBed } from '@angular/core/testing';

import { ImportarPersonajeService } from './importar-personaje.service';

describe('ImportarPersonajeService', () => {
  let service: ImportarPersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportarPersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
