import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() data: any[] = []
  @Input() columns: string[] = []
  @Input() tableTitle: string=''
  @Input() createPath: string= ''
  @Output() viewItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<any>();
  

  onView(item: any) {
    this.viewItem.emit(item);
  }

  onDelete(item: any) {
    this.deleteItem.emit(item);
  }

}
