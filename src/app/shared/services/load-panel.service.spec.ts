import { TestBed } from '@angular/core/testing';

import { LoadPanelService } from './load-panel.service';

describe('LoadPanelService', () => {
  let service: LoadPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
