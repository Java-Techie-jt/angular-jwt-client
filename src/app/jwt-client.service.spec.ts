import { TestBed } from '@angular/core/testing';

import { JwtClientService } from './jwt-client.service';

describe('JwtClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtClientService = TestBed.get(JwtClientService);
    expect(service).toBeTruthy();
  });
});
