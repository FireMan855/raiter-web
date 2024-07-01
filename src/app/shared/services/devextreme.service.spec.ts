import { TestBed } from '@angular/core/testing';

import { DevextremeService } from './devextreme.service';

describe('DevextremeService', () => {
  let service: DevextremeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevextremeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
