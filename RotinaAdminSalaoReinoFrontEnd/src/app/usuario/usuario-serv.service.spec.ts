import { TestBed } from '@angular/core/testing';

import { UsuarioServService } from './usuario-serv.service';

describe('UsuarioServService', () => {
  let service: UsuarioServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
