import { Component } from '@angular/core';
import { SchedluledMaintenanceJob } from '../../../core/models/schedluled-maintenance-job';
import { Router } from '@angular/router';
import { SchedluledMaintenanceJobService } from '../../../core/services/schedluled-maintenance-job.service';
import { ListComponent } from '../../../shared/components/list/list.component';
import { NavigateService } from '../../../core/services/navigate.service';
import { Pages } from '../../../shared/enums/pages';

@Component({
  selector: 'app-schedluled-maintenance-job-list',
  imports: [ListComponent],
  templateUrl: './schedluled-maintenance-job-list.component.html',
  styleUrl: './schedluled-maintenance-job-list.component.css'
})
export class SchedluledMaintenanceJobListComponent {
  columns = ['id', 'date', 'time', 'maintenanceJob']
  schedludMaintenanceJobs: SchedluledMaintenanceJob[] = [];

  constructor(private service: SchedluledMaintenanceJobService, private navigateService:NavigateService) { }

  onView(id: any) {
    //this.router.navigate(['/schedluled-maintenance-job', id]);
    this.navigateService.navigateTo(Pages.ViewScheduledMaintenanceJob, id)

    
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete the schedluled maintenance job ID ${id}?`)) {
      this.service.delete(id).subscribe(() => {
        this.schedludMaintenanceJobs = this.schedludMaintenanceJobs.filter(j => j.id !== id);
      });
    }
  }

  onCreate(){
    this.navigateService.navigateTo(Pages.AddScheduledMaintenanceJob)
  }


  navigateToCreate() {
    this.navigateService.navigateTo(Pages.AddScheduledMaintenanceJob)
  }

  ngOnInit() {
    this.service.getAll().subscribe((jobs) => (this.schedludMaintenanceJobs = jobs));
  }

}
