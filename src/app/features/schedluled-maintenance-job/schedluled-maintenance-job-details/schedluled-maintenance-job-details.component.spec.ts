import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedluledMaintenanceJobDetailsComponent } from './schedluled-maintenance-job-details.component';

describe('SchedluledMaintenanceJobDetailsComponent', () => {
  let component: SchedluledMaintenanceJobDetailsComponent;
  let fixture: ComponentFixture<SchedluledMaintenanceJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedluledMaintenanceJobDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedluledMaintenanceJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
