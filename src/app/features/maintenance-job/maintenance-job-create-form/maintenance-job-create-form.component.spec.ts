import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceJobCreateFormComponent } from './maintenance-job-create-form.component';

describe('MaintenanceJobCreateFormComponent', () => {
  let component: MaintenanceJobCreateFormComponent;
  let fixture: ComponentFixture<MaintenanceJobCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceJobCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceJobCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
