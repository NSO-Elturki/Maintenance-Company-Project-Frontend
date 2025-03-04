import { Component, OnInit } from '@angular/core';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { CommonModule } from '@angular/common';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { Router } from '@angular/router';
import { ListComponent } from '../../../shared/components/list/list.component';
import { FormsModule } from '@angular/forms';
import { MaintenanceSpareService } from '../../../core/services/maintenance-spare.service';
import { NavigateService } from '../../../core/services/navigate.service';
import { Pages } from '../../../shared/enums/pages';

@Component({
  selector: 'app-maintenance-job-list',
  imports: [ListComponent],
  templateUrl: './maintenance-job-list.component.html',
  styleUrl: './maintenance-job-list.component.css'
})
export class MaintenanceJobListComponent implements OnInit {
  columns = ['id', 'name', 'costPerHour', 'timeToFinish'];
  maintenanceJobs: MaintenanceJob[] = [];
  spareParts: any[] = []

  constructor(private service: MaintenanceJobService, private ms: MaintenanceSpareService, private navigateService: NavigateService) { }

  onView(jobId: any) {
    this.navigateService.navigateTo(Pages.ViewMaintenanceJob, jobId)
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete maintenance job ID ${id}?`)) {
      this.service.delete(id).subscribe(() => {
        this.maintenanceJobs = this.maintenanceJobs.filter(j => j.id !== id);
      });
    }
  }

  onCreate() {
    this.navigateService.navigateTo(Pages.AddMaintenanceJob)
  }

  ngOnInit() {
    this.service.getAll().subscribe((jobs) => (this.maintenanceJobs = jobs));
  }

}
