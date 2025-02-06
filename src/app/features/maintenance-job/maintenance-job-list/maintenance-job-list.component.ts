import { Component, OnInit } from '@angular/core';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { CommonModule } from '@angular/common';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { Router } from '@angular/router';
import { ListComponent } from '../../../shared/components/list/list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maintenance-job-list',
  imports: [CommonModule, ListComponent, FormsModule],
  templateUrl: './maintenance-job-list.component.html',
  styleUrl: './maintenance-job-list.component.css'
})
export class MaintenanceJobListComponent implements OnInit {
  columns = ['id', 'name', 'costPerHour', 'timeToFinish' ];
  maintenanceJobs: MaintenanceJob[] = [];

  constructor(private service: MaintenanceJobService, private router: Router) { }

  onView(jobId: any) {
    this.router.navigate(['/maintenance-job', jobId]); 
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete maintenance job ID ${id}?`)) {
      this.service.delete(id).subscribe(() => {
        this.maintenanceJobs = this.maintenanceJobs.filter(j => j.id !== id);
      });
    }
  }
  
  ngOnInit() {
    this.service.getAll().subscribe((jobs) => (this.maintenanceJobs = jobs));
  }

}
