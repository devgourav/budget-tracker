import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private sidebarState = new BehaviorSubject('close');

  constructor() {}

  changeSidebarState(action: string) {
    this.sidebarState.next(action);
  }

  getSidebarState() {
    return this.sidebarState.asObservable();
  }
}
