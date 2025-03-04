import { Injectable, signal  } from '@angular/core';
import { Pages } from '../../shared/enums/pages';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

    currentView = signal<Pages>(Pages.ScheduledMaintenanceJobs);
    currentItemId = signal(0);

    navigateTo(page: Pages, id?: number) {
      this.currentView.set(page);
      if(id){
        console.log(id, 'from service')
        this.currentItemId.set(id)
      }
    }

  constructor() { }
}
