import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigateService } from '../../core/services/navigate.service';
import { Pages } from '../enums/pages';


@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  Pages = Pages

  constructor(public service:NavigateService){}

  onClick(page:Pages){
    this.service.navigateTo(page)
  }

}
