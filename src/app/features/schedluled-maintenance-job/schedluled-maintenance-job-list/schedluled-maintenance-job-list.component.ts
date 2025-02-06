import { Component } from '@angular/core';
import { SchedluledMaintenanceJob } from '../../../core/models/schedluled-maintenance-job';
import { Router } from '@angular/router';
import { SchedluledMaintenanceJobService } from '../../../core/services/schedluled-maintenance-job.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../../shared/components/list/list.component';

@Component({
  selector: 'app-schedluled-maintenance-job-list',
  imports: [CommonModule, ListComponent],
  templateUrl: './schedluled-maintenance-job-list.component.html',
  styleUrl: './schedluled-maintenance-job-list.component.css'
})
export class SchedluledMaintenanceJobListComponent {
  columns = ['id', 'date', 'time', 'maintenanceJob']
  schedludMaintenanceJobs: SchedluledMaintenanceJob[] = [];

  constructor(private service: SchedluledMaintenanceJobService, private router: Router) { }

  onView(id: any) {
    this.router.navigate(['/schedluled-maintenance-job', id]);
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete the schedluled maintenance job ID ${id}?`)) {
      this.service.delete(id).subscribe(() => {
        this.schedludMaintenanceJobs = this.schedludMaintenanceJobs.filter(j => j.id !== id);
      });
    }
  }

  navigateToCreate() {
    this.router.navigate(['/create-schedluled-maintenance-job']);
  }

  ngOnInit() {
    this.service.getAll().subscribe((jobs) => (this.schedludMaintenanceJobs = jobs));
  }

}
