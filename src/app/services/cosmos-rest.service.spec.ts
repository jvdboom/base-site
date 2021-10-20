import { TestBed } from '@angular/core/testing';

import { CosmosRestService } from './cosmos-rest.service';

describe('CosmosRestService', () => {
  let service: CosmosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
