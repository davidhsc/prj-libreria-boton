import { TestBed } from '@angular/core/testing';

import { TestLibreriaBotonService } from './test-libreria-boton.service';

describe('TestLibreriaBotonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibreriaBotonService = TestBed.get(TestLibreriaBotonService);
    expect(service).toBeTruthy();
  });
});
