import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedluledMaintenanceJobCreateComponent } from './schedluled-maintenance-job-create.component';

describe('SchedluledMaintenanceJobCreateComponent', () => {
  let component: SchedluledMaintenanceJobCreateComponent;
  let fixture: ComponentFixture<SchedluledMaintenanceJobCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedluledMaintenanceJobCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedluledMaintenanceJobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
