import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceJobDetailsComponent } from './maintenance-job-details.component';

describe('MaintenanceJobDetailsComponent', () => {
  let component: MaintenanceJobDetailsComponent;
  let fixture: ComponentFixture<MaintenanceJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceJobDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
