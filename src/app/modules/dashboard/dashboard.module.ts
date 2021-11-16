import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, AddTransactionComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
