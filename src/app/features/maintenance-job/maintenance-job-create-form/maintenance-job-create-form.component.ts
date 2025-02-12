import { Component } from '@angular/core';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { Router } from '@angular/router';
import { CreateComponent } from '../../../shared/components/create/create.component';

@Component({
  selector: 'app-maintenance-job-create-form',
  imports: [CreateComponent],
  templateUrl: './maintenance-job-create-form.component.html',
  styleUrl: './maintenance-job-create-form.component.css'
})
export class MaintenanceJobCreateFormComponent {

  title = 'Maintenance Job'

  fields = [
    { name: 'name', type: 'text', label: 'Maintenance Job Name' },
    { name: 'costPerHour', type: 'number', label: 'Cost' },
    { name: 'timeToFinish', type: 'number', label: 'Duration' }
  ];

  maintenanceJob: MaintenanceJob = {
    id: 0,
    name: '',
    costPerHour: 0,
    timeToFinish: 0,
   // spareParts: []
  };

  constructor(private service: MaintenanceJobService, private router: Router) { }

  onSubmit(newItem: any) {
    this.maintenanceJob = {
      id: newItem.id,
      name: newItem.name,
      costPerHour: newItem.costPerHour,
      timeToFinish: newItem.timeToFinish,
     // spareParts: []
    };
    this.service.create(this.maintenanceJob).subscribe({
      next: (part) => {
        if (confirm('Job added successfully! Do you want to go to the maintenance job list?')) {
          this.router.navigate(['/all-maintenance-jobs']);
        }
      },
      error: (err) => {
        console.error('Failed to add maintenance job:', err);
        alert('Failed to add maintenance job. Please try again.');
      }
    });

    this.resetForm();
  }

  resetForm() {
    this.maintenanceJob = {
      id: 0,
      name: '',
      costPerHour: 0,
      timeToFinish: 0,
    //  spareParts: []
    };
  }

}
