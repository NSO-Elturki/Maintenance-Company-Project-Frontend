import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { DetailsComponent } from '../../../shared/components/details/details.component';
import { MaintenanceSpareService } from '../../../core/services/maintenance-spare.service';
import { switchMap } from 'rxjs';
import { NavigateService } from '../../../core/services/navigate.service';
import { Pages } from '../../../shared/enums/pages';

@Component({
  selector: 'app-maintenance-job-details',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './maintenance-job-details.component.html',
  styleUrls: ['./maintenance-job-details.component.css']
})
export class MaintenanceJobDetailsComponent implements OnInit {
  title = 'Maintenance Job'
  jobId!: number;
  job: MaintenanceJob | undefined;
  labels = ['ID', 'Name', 'Cost Per Hour', 'Duration', 'Spare Parts'];

  constructor(private service: MaintenanceJobService, private route: ActivatedRoute, private maintenanceSpareService:MaintenanceSpareService , private navigateService:NavigateService) { }

  ngOnInit(): void {
    this.jobId = this.navigateService.currentItemId();
    this.getMaintenanceJob();
  }

  getMaintenanceJob(): void {
      this.service.getById(this.jobId).pipe(
        switchMap((job) => {
          this.job = job;
          return this.maintenanceSpareService.getAllSparePartsByMaintenanceJobID(this.jobId);
        })
      ).subscribe({
        next: (data) => {
          if (this.job) {
            this.job.spareParts = data.map(item => item.sparePart);
          }
        },
        error: (err) => console.error('Error fetching:', err),
      });
    }

  onDelete(): void {
    const isConfirmed = confirm('Are you sure you want to delete this maintenance job?');
    if (isConfirmed) {
      this.service.delete(this.jobId).subscribe({
        next: () => {
          alert('Maintenance job deleted successfully!');
          this.navigateService.navigateTo(Pages.MaintenanceJobs)
        },
        error: (err) => {
          console.error('Failed to delete maintenance job:', err);
          alert('Failed to delete maintenance job. Please try again later.');
        },
      });
    }
  }
}
