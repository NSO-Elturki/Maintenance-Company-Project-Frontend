import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
   @Input() data: any
    @Input() title!: string;  
    @Output() deleteItem = new EventEmitter<any>();
    @Input() labels: any[] = [];  


    objectKeys = Object.keys;  

    onDelete(item: any) {
      this.deleteItem.emit(item);
    }
    isArray(value: any): boolean {
      return Array.isArray(value);
    }
    isObject(value: any): boolean {
      return typeof value === 'object' && !Array.isArray(value) && value !== null;
    }
}
