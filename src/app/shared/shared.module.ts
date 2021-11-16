import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextToggleComponent } from "./components/text-toggle/text-toggle.component";
import { CurrencyDirective } from "./directives/currency.directive";

@NgModule({
  declarations: [TextToggleComponent, CurrencyDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, TextToggleComponent, CurrencyDirective],
})
export class SharedModule {}
