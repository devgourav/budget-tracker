import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-topbar></app-topbar> <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'budgetTracker';
}
