import { TestBed } from '@angular/core/testing';

import { SwatchesService } from './swatches.service';

describe('SwatchesService', () => {
  let service: SwatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
