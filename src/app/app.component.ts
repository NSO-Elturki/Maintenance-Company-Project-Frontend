import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { NavigateService } from './core/services/navigate.service';
import { SparePartListComponent } from './features/spare-part/spare-part-list/spare-part-list.component';
import { CommonModule } from '@angular/common';
import { SchedluledMaintenanceJobListComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-list/schedluled-maintenance-job-list.component';
import { MaintenanceJobListComponent } from './features/maintenance-job/maintenance-job-list/maintenance-job-list.component';
import { Pages } from './shared/enums/pages';
import { SchedluledMaintenanceJobDetailsComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-details/schedluled-maintenance-job-details.component';
import { MaintenanceJobDetailsComponent } from './features/maintenance-job/maintenance-job-details/maintenance-job-details.component';
import { SparePartDetailsComponent } from './features/spare-part/spare-part-details/spare-part-details.component';
import { SchedluledMaintenanceJobCreateComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-create/schedluled-maintenance-job-create.component';
import { MaintenanceJobCreateFormComponent } from './features/maintenance-job/maintenance-job-create-form/maintenance-job-create-form.component';
import { SparePartCreateComponent } from './features/spare-part/spare-part-create/spare-part-create.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SparePartListComponent, SchedluledMaintenanceJobListComponent, MaintenanceJobListComponent, SchedluledMaintenanceJobDetailsComponent, MaintenanceJobDetailsComponent, SparePartDetailsComponent, SchedluledMaintenanceJobCreateComponent, MaintenanceJobCreateFormComponent, SparePartCreateComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-maintenance-frontend';
  Pages = Pages
  constructor(public service:NavigateService){}
}
