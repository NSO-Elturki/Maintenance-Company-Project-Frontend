import { Component } from '@angular/core';
import { SparePart } from '../../../core/models/spare-part';
import { SparePartService } from '../../../core/services/spare-part.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsComponent } from '../../../shared/components/details/details.component';
import { MaintenanceSpareService } from '../../../core/services/maintenance-spare.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-spare-part-details',
  imports: [DetailsComponent],
  templateUrl: './spare-part-details.component.html',
  styleUrl: './spare-part-details.component.css'
})
export class SparePartDetailsComponent {

  title = 'Spare Part'
  sparePartId!: number;
  sparePart: SparePart | undefined;
  labels = ['ID', 'Name', 'Price', 'Maintenance Job'];


  constructor(private maintenanceSpareService:MaintenanceSpareService,  private service: SparePartService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sparePartId = +this.route.snapshot.params['id'];
    this.getSchedluledMaintenanceJob();
    //this.fetchSpareParts()
  }
  getSchedluledMaintenanceJob(): void {
    this.service.getById(this.sparePartId).pipe(
      switchMap((part) => {
        this.sparePart = part;
        return this.maintenanceSpareService.getAllMaintenanceJobIDBySparePartsID(this.sparePartId);
      })
    ).subscribe({
      next: (data) => {
        if (this.sparePart) {
          this.sparePart.maintenanceJob = data.map(item => item.maintenanceJob);
        }
      },
      error: (err) => console.error('Error fetching:', err),
    });
  }
  
  onDelete(): void {
    const isConfirmed = confirm('Are you sure you want to delete this spare part?');
    if (isConfirmed) {
      this.service.delete(this.sparePartId).subscribe({
        next: () => {
          alert('Spare part deleted successfully!');
          this.router.navigate(['/all-spare-part']);
        },
        error: (err) => {
          console.error('Failed to delete spare part:', err);
          alert('Failed to delete. Please try again later.');
        },
      });
    }
  }
}
