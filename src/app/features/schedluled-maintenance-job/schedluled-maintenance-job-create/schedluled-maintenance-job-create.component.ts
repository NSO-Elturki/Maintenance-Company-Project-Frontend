import { Component, OnInit } from '@angular/core';
import { SchedluledMaintenanceJobService } from '../../../core/services/schedluled-maintenance-job.service';
import { SchedluledMaintenanceJob } from '../../../core/models/schedluled-maintenance-job';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { Router } from '@angular/router';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateComponent } from '../../../shared/components/create/create.component';


@Component({
  selector: 'app-schedluled-maintenance-job-create',
  imports: [FormsModule, CommonModule, CreateComponent],
  templateUrl: './schedluled-maintenance-job-create.component.html',
  styleUrl: './schedluled-maintenance-job-create.component.css'
})
export class SchedluledMaintenanceJobCreateComponent implements OnInit {
  title = 'Schedluled Maintenance Job'

  fields = [
    { name: 'date', type: 'date', label: 'Date' },
    { name: 'time', type: 'time', label: 'Time' },
    { name: 'maintenanceJob', type: 'select', label: 'Select Maintenance Job' }
  ];

  maintenanceJobs: MaintenanceJob[] = [];

  scheduledJob: SchedluledMaintenanceJob = {
    id: 0,
    date: '',
    time: '',
    // maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0, spareParts: [] }  // Initialize the address object
    maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0}  // Initialize the address object

  };

  constructor(private maintenanceJobService: MaintenanceJobService,
    private scheduledMaintenanceJobService: SchedluledMaintenanceJobService,
    private router: Router
  ) { }

  onSubmit(newItem: any) {
    this.scheduledJob = {
      id: newItem.id,
      date: newItem.date,
      time: newItem.time,
      maintenanceJob: newItem.maintenanceJob
    };
    this.scheduledMaintenanceJobService.create(this.scheduledJob).subscribe({
      next: (part) => {
        if (confirm('Schedluled job added successfully! Do you want to go to the schedluled maintenance job list?')) {
          this.router.navigate(['/all-schedluled-maintenance-job']);
        }
      },
      error: (err) => {
        console.error('Failed to add schedluled job:', err);
        alert('Failed to add schedluled job. Please try again.');
      }
    });

    this.resetForm();
  }

  resetForm() {
    this.scheduledJob = {
      id: 0,
      date: '',
      time: '',
      // maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0, spareParts: [] }
      maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0}

    };
  }

  ngOnInit(): void {
    this.maintenanceJobService.getAll().subscribe({
      next: (jobs) => {
        this.maintenanceJobs = jobs;
      },
      error: (err) => {
        console.error('Failed to fetch maintenance jobs:', err);
      }
    });
  }
}
