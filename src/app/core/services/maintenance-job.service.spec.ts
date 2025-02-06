import { TestBed } from '@angular/core/testing';

import { MaintenanceJobService } from './maintenance-job.service';

describe('MaintenanceJobService', () => {
  let service: MaintenanceJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
