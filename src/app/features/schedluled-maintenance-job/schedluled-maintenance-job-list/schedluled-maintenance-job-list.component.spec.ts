import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedluledMaintenanceJobListComponent } from './schedluled-maintenance-job-list.component';

describe('SchedluledMaintenanceJobListComponent', () => {
  let component: SchedluledMaintenanceJobListComponent;
  let fixture: ComponentFixture<SchedluledMaintenanceJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedluledMaintenanceJobListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedluledMaintenanceJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
