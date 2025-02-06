import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Input() title!: string;  
  @Input() fields: any[] = [];  
  @Input() list: any[] = [];  

  @Output() formSubmitted = new EventEmitter<any>(); 

  formData: any = {};

  onSubmit() {
    const randomId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    this.formData.id = randomId;
    this.formSubmitted.emit(this.formData); 
  }

}