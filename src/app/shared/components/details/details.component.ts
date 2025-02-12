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
      console.log(Array.isArray(value))
      return Array.isArray(value);
    }
    isObject(value: any): boolean {
      return typeof value === 'object' && !Array.isArray(value) && value !== null;
    }
    // getObjectString(obj: any): string {
    //   console.log('hhhhh',obj.constructor.name)
    //   //if (obj && obj.toString && obj.constructor.name === 'Address') {
    //     return obj.toString(); // Use custom toString if available
    // //  }
    //   //return JSON.stringify(obj, null, 2); // Fallback to JSON.stringify
    // }

}
