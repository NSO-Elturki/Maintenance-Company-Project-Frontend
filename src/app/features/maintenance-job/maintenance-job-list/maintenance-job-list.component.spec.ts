import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceJobListComponent } from './maintenance-job-list.component';

describe('MaintenanceJobListComponent', () => {
  let component: MaintenanceJobListComponent;
  let fixture: ComponentFixture<MaintenanceJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceJobListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
