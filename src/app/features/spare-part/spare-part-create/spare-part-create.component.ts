import { Component, OnInit } from '@angular/core';
import { SparePartService } from '../../../core/services/spare-part.service';
import { SparePart } from '../../../core/models/spare-part';
import { Router } from '@angular/router';
import { CreateComponent } from '../../../shared/components/create/create.component';
import { CommonModule } from '@angular/common';
import { MaintenanceJobService } from '../../../core/services/maintenance-job.service';
import { MaintenanceJob } from '../../../core/models/maintenance-job';
import { MaintenanceSpareService } from '../../../core/services/maintenance-spare.service';
import { MaintenanceSpare } from '../../../core/models/maintenance-spare';

@Component({
  selector: 'app-spare-part-create',
  imports: [CommonModule, CreateComponent],
  templateUrl: './spare-part-create.component.html',
  styleUrl: './spare-part-create.component.css'
})
export class SparePartCreateComponent implements OnInit {

  title = 'Spar part'

  fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'price', type: 'number', label: 'Price' },
    { name: 'maintenanceJob', type: 'select', label: 'Select Maintenance Job' }
  ];
  sparePart: SparePart = {
    id: 0,
    name: '',
    price: 0,
    // maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0, spareParts: [] }
   // maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0}

  };
  

  maintenanceJobs: MaintenanceJob[] = []

  constructor(private sparePartService: SparePartService, private maintenanceJobService: MaintenanceJobService, private maintenanceSpareService:MaintenanceSpareService, private router: Router) { }

  onSubmit(newItem: any) {
    this.sparePart = {
      id: newItem.id,
      name: newItem.name,
      price: newItem.price,
     // maintenanceJob: newItem.maintenanceJob
    };
    this.sparePartService.create(this.sparePart).subscribe({
      next: (part) => {
        this.addMaintenanceJobToSparePart(newItem.maintenanceJob, part)
        if (confirm('Job added successfully! Do you want to go to the spar part list?')) {
          this.router.navigate(['/all-spare-parts']);
        }
      },
      error: (err) => {
        console.error('Failed to add the spar part:', err);
        alert('Failed to add the spare part. Please try again.');
      }
    });

    this.resetForm();
  }

  addMaintenanceJobToSparePart(maintenanceJob: MaintenanceJob, sparePart: SparePart){
    console.log('LOOOKK', sparePart)
    const maintenanceSpare: MaintenanceSpare = {
      maintenanceJob: maintenanceJob,
      sparePart: sparePart
    };
    this.maintenanceSpareService.create(maintenanceSpare).subscribe({
      next: (part) => {
       console.log('maintenanceSpare object created!')
      },
      error: (err) => {
        console.error('Failed to add the spar part:', err);
        alert('Failed to add the spare part. Please try again.');
      }
    });


  }

  resetForm() {
    this.sparePart = {
      id: 0,
      name: '',
      price: 0,
   //   maintenanceJob: { id: 0, name: '', costPerHour: 0, timeToFinish: 0, spareParts: [] }
    };
  }

  ngOnInit(): void {
    this.maintenanceJobService.getAll().subscribe((jobs) => {
      this.maintenanceJobs = jobs;
    });

  }

}