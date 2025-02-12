import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SchedluledMaintenanceJob } from '../models/schedluled-maintenance-job';
import { BaseService } from './base-crud-service';
import { MaintenanceSpare } from '../models/maintenance-spare';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceSpareService extends BaseService<MaintenanceSpare> {


   constructor(http: HttpClient) {
    super(http, 'http://localhost:5000/maintenanceSpare'); 
  }

  getAllSparePartsByMaintenanceJobID(id:number):Observable<MaintenanceSpare[]> {
      return this.http.get<MaintenanceSpare[]>(`${this.baseUrl}?maintenanceJob.id=${id}`);
  
}

getAllMaintenanceJobIDBySparePartsID(id:number):Observable<MaintenanceSpare[]> {
    return this.http.get<MaintenanceSpare[]>(`${this.baseUrl}?sparePart.id=${id}`);

}
}
