import { TestBed } from '@angular/core/testing';

import { SocketwebService } from './socketweb.service';

describe('SocketwebService', () => {
  let service: SocketwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
