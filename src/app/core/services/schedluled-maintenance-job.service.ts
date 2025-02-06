import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SchedluledMaintenanceJob } from '../models/schedluled-maintenance-job';
import { BaseService } from './base-crud-service';

@Injectable({
  providedIn: 'root'
})
export class SchedluledMaintenanceJobService extends BaseService<SchedluledMaintenanceJob> {

   constructor(http: HttpClient) {
    super(http, 'http://localhost:5000/scheduledMaintenanceJobs'); 
  }
  
}
