import { TestBed } from '@angular/core/testing';

import { NeedypeopleserviceService } from './needypeopleservice.service';

describe('NeedypeopleserviceService', () => {
  let service: NeedypeopleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedypeopleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
