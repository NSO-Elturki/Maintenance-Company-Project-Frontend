import { Component } from '@angular/core';
import { SchedluledMaintenanceJob } from '../../../core/models/schedluled-maintenance-job';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedluledMaintenanceJobService } from '../../../core/services/schedluled-maintenance-job.service';
import { DetailsComponent } from '../../../shared/components/details/details.component';


@Component({
  selector: 'app-schedluled-maintenance-job-details',
  imports: [DetailsComponent],
  templateUrl: './schedluled-maintenance-job-details.component.html',
  styleUrl: './schedluled-maintenance-job-details.component.css'
})
export class SchedluledMaintenanceJobDetailsComponent {
  title = 'Schedluled Maintenance Job'
  schedluledMaintenanceJobId!: number;
  schedluledMaintenanceJob: SchedluledMaintenanceJob | undefined;
  labels = ['ID', 'Date', 'Time', 'Maintenance Job'];


  constructor(private schedluledmaintenanceJobService: SchedluledMaintenanceJobService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.schedluledMaintenanceJobId = +this.route.snapshot.params['id'];
    this.getSchedluledMaintenanceJob();
  }

  getSchedluledMaintenanceJob(): void {
    this.schedluledmaintenanceJobService.getById(this.schedluledMaintenanceJobId).subscribe({
      next: (schedluledMaintenanceJob) => {
        this.schedluledMaintenanceJob = schedluledMaintenanceJob;
        console.log(schedluledMaintenanceJob)
      },
      error: (err) => console.error('Failed to fetch schedluled maintenance job:', err),
    });
  }

  onDelete(): void {
    const isConfirmed = confirm('Are you sure you want to delete this schedluled maintenance job?');
    if (isConfirmed) {
      this.schedluledmaintenanceJobService.delete(this.schedluledMaintenanceJobId).subscribe({
        next: () => {
          alert('Schedluled maintenance job deleted successfully!');
          this.router.navigate(['/all-schedluled-maintenance-job']);
        },
        error: (err) => {
          console.error('Failed to delete schedluled maintenance job:', err);
          alert('Failed to delete the schedluled maintenance job. Please try again later.');
        },
      });
    }
  }
}
