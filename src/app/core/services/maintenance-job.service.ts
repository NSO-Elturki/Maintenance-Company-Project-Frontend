import { Injectable } from '@angular/core';
import { MaintenanceJob } from '../models/maintenance-job';
import {HttpClient} from '@angular/common/http'
import { BaseService } from './base-crud-service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceJobService extends BaseService<MaintenanceJob> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:5000/maintenanceJobs'); 
  }
}
