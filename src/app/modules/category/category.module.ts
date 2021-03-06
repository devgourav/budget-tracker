import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryAddComponent } from "./category-add/category-add.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent],
  imports: [CommonModule, SharedModule],
})
export class CategoryModule {}
