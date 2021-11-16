import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryModule } from "./modules/category/category.module";
import { CoreModule } from "./modules/core/core.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
