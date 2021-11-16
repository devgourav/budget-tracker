import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [TopbarComponent, SidebarComponent],
})
export class CoreModule {}
