import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor } from "@angular/forms";
import { TransactionType } from "../../models/transaction.model";

@Component({
  selector: "app-text-toggle",
  template: `
    <div class="w-full text-center">
      <div class="inline-flex rounded-md border-2">
        <p
          class="rounded-l-md w-30 text-center"
          [ngClass]="{
            'active-toggle': transactionType == 'expense',
            'default-toggle': transactionType == 'income'
          }"
          (click)="toggleSelect('expense')">
          Expense
        </p>
        <p
          class="rounded-r-md w-30 text-center"
          [ngClass]="{
            'active-toggle': transactionType == 'income',
            'default-toggle': transactionType == 'expense'
          }"
          (click)="toggleSelect('income')">
          Income
        </p>
      </div>
    </div>
  `,
  styleUrls: ["./text-toggle.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextToggleComponent,
    },
  ],
})
export class TextToggleComponent implements OnInit, ControlValueAccessor {
  transactionType: TransactionType = TransactionType.Expense;
  isExpense: boolean = true;
  touched = false;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  writeValue(transactionType: TransactionType) {
    this.transactionType = transactionType;
  }
  onChange = (transactionType: TransactionType) => {};

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  onTouched = () => {};

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  ngOnInit(): void {}

  toggleSelect(value: string) {
    this.markAsTouched();
    this.isExpense = value == "expense" ? true : false;

    this.transactionType = value == "expense" ? TransactionType.Expense : TransactionType.Income;
    this.onChange(this.transactionType);
    this.messageEvent.emit(value);
  }
}
