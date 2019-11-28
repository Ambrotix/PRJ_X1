import { TestBed, inject } from '@angular/core/testing';

import { ListSvcService } from './list-svc.service';

describe('ListSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListSvcService]
    });
  });

  it('should ...', inject([ListSvcService], (service: ListSvcService) => {
    expect(service).toBeTruthy();
  }));
});
