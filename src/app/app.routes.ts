import { Routes } from '@angular/router';
import { DashboardComponent } from './features/overview/dashboard/dashboard.component';
import { MaintenanceJobCreateFormComponent } from './features/maintenance-job/maintenance-job-create-form/maintenance-job-create-form.component';
import { MaintenanceJobListComponent } from './features/maintenance-job/maintenance-job-list/maintenance-job-list.component';
import { SchedluledMaintenanceJobCreateComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-create/schedluled-maintenance-job-create.component';
import { SchedluledMaintenanceJobListComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-list/schedluled-maintenance-job-list.component';
import { MaintenanceJobDetailsComponent } from './features/maintenance-job/maintenance-job-details/maintenance-job-details.component';
import { SchedluledMaintenanceJobDetailsComponent } from './features/schedluled-maintenance-job/schedluled-maintenance-job-details/schedluled-maintenance-job-details.component';
import { SparePartDetailsComponent } from './features/spare-part/spare-part-details/spare-part-details.component';
import { SparePartListComponent } from './features/spare-part/spare-part-list/spare-part-list.component';
import { SparePartCreateComponent } from './features/spare-part/spare-part-create/spare-part-create.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'create-maintenance-job', component: MaintenanceJobCreateFormComponent},
    {path: 'all-maintenance-jobs', component: MaintenanceJobListComponent},
    {path: 'create-schedluled-maintenance-job', component: SchedluledMaintenanceJobCreateComponent},
    {path: 'all-schedluled-maintenance-job', component: SchedluledMaintenanceJobListComponent},
    {path: 'schedluled-maintenance-job/:id', component: SchedluledMaintenanceJobDetailsComponent},
    { path: 'maintenance-job/:id', component: MaintenanceJobDetailsComponent }, 
    { path: 'spare-part/:id', component: SparePartDetailsComponent }, 
    { path: 'all-spare-parts', component: SparePartListComponent }, 
    { path: 'create-spare-part', component: SparePartCreateComponent }, 
];
