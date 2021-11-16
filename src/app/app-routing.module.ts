import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryAddComponent } from "./modules/category/category-add/category-add.component";
import { CategoryListComponent } from "./modules/category/category-list/category-list.component";
import { AddTransactionComponent } from "./modules/dashboard/components/add-transaction/add-transaction.component";
import { DashboardComponent } from "./modules/dashboard/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "add-transaction",
    component: AddTransactionComponent,
  },
  {
    path: "category",
    component: CategoryListComponent,
  },
  {
    path: "add-category",
    component: CategoryAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
