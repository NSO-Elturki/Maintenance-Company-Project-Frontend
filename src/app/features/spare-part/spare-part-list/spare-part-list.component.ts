import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../shared/components/list/list.component';
import { SparePart } from '../../../core/models/spare-part';
import { Router } from '@angular/router';
import { SparePartService } from '../../../core/services/spare-part.service';
import { NavigateService } from '../../../core/services/navigate.service';
import { Pages } from '../../../shared/enums/pages';


@Component({
  selector: 'app-spare-part-list',
  imports: [ListComponent],
  templateUrl: './spare-part-list.component.html',
  styleUrl: './spare-part-list.component.css'
})
export class SparePartListComponent implements OnInit {

  columns = ['id', 'name', 'price']
  spareParts: SparePart[] = []

  constructor(private sparePartService: SparePartService, private navigateService: NavigateService) { }

  onView(id: any) {
    this.navigateService.navigateTo(Pages.ViewSparePart, id)
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete spare part ID ${id}?`)) {
      this.sparePartService.delete(id).subscribe(() => {
        this.spareParts = this.spareParts.filter(j => j.id !== id);
      });
    }
  }

  onCreate(){
    this.navigateService.navigateTo(Pages.AddSparePart)
  }

  ngOnInit(): void {
    this.sparePartService.getAll().subscribe((parts) => (this.spareParts = parts));
  }

}
