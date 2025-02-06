import { TestBed } from '@angular/core/testing';

import { SchedluledMaintenanceJobService } from './schedluled-maintenance-job.service';

describe('SchedluledMaintenanceJobService', () => {
  let service: SchedluledMaintenanceJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedluledMaintenanceJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
