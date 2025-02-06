import { Injectable } from '@angular/core';
import { SparePart } from '../models/spare-part';
import { BaseService } from './base-crud-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparePartService extends BaseService<SparePart> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:5000/spareParts');
  }
}
