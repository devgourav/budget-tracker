import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Transaction, TransactionType } from "src/app/shared/models/transaction.model";
import { format } from "date-fns";
import { LocaldbService } from "src/app/modules/core/service/localdb.service";

@Component({
  selector: "app-add-transaction",
  template: `
    <div>
      <div class="flex items-center">
        <img
          src="assets/images/icons/arrow-left.svg"
          alt="Close Icon"
          class="p-2 w-10 h-10 hover:cursor-pointer"
          (click)="goBack()" />

        <p class="font-bold text-sm text-gray-500">Return to Dashboard</p>
      </div>

      <h3 class="font-bold text-center my-2 m-auto relative right-4">Add new Expense or Income</h3>

      <div class="px-6">
        <form [formGroup]="transactionForm">
          <div class="mt-4">
            <app-text-toggle
              formControlName="type"
              (messageEvent)="receiveType($event)"></app-text-toggle>
          </div>

          <div class="mt-4">
            <p class="my-2">How much did you {{ amountLabel }}?</p>
            <input type="number" placeholder="0.00" formControlName="amount" appCurrency />
          </div>

          <div class="mt-4">
            <p class="my-2">{{ categoryLabel }}</p>

            <input type="string" placeholder="Add category" formControlName="category" class="" />
          </div>

          <div class="mt-4">
            <p class="my-2">{{ accountLabel }}</p>

            <input type="string" placeholder="Add account" formControlName="accountName" class="" />
          </div>

          <div class="mt-4">
            <p class="my-2">When did you made the {{ dateLabel }}?</p>

            <input
              type="date"
              formControlName="transactionDate"
              class=" bg-white"
              max="{{ currentDate | date: 'yyyy-MM-dd' }}" />
          </div>

          <div class="mt-4">
            <p class="my-2">Any special note?</p>

            <textarea
              name="notes"
              id=""
              cols="30"
              rows="3"
              placeholder="Add any note"
              formControlName="note"
              class=""></textarea>
          </div>
        </form>

        <div class="w-full text-center mt-8">
          <button class="bt-buttton w-36" (click)="addNewTransaction()">Save</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./add-transaction.component.scss"],
})
export class AddTransactionComponent implements OnInit {
  transactionForm: FormGroup;

  amountLabel: string = "spend";
  categoryLabel: string = "What kind of purchase was it?";
  dateLabel: string = "purchase";
  accountLabel: string = "Where did you spend it from?";
  currentDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private localdbService: LocaldbService
  ) {}

  ngOnInit(): void {
    let today = format(new Date(), "yyyy-MM-dd");
    this.transactionForm = this.fb.group({
      amount: [100, Validators.required],
      type: [TransactionType.Expense],
      category: ["Food", Validators.required],
      accountName: ["Salary", Validators.required],
      note: [""],
      transactionDate: [today, Validators.required],
    });
  }

  get amount() {
    return this.transactionForm.get("amount");
  }

  get category() {
    return this.transactionForm.get("category");
  }

  get accountName() {
    return this.transactionForm.get("accountName");
  }

  get transactionDate() {
    return this.transactionForm.get("transactionDate");
  }

  receiveType($event: any) {
    this.amountLabel = $event == "expense" ? "spend" : "earn";

    this.categoryLabel =
      $event == "expense" ? "What kind of purchase was it?" : "How did you earn?";

    this.dateLabel = $event == "expense" ? "purchase" : "income";

    this.accountLabel =
      $event == "expense" ? "Where did you spend it from?" : "Where do you want to save it?";
  }

  goBack() {
    this.location.back();
  }

  addNewTransaction() {
    let transaction: Transaction = {
      amount: this.transactionForm.get("amount")?.value,
      type: this.transactionForm.get("type")?.value,
      category: [this.transactionForm.get("category")?.value],
      accountName: "",
      note: this.transactionForm.get("note")?.value,
      transactionDate: new Date(this.transactionForm.get("transactionDate")?.value),
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    this.localdbService.set("transactions", transaction).then(() => {
      console.log(
        "🚀 ~ file: add-transaction.component.ts ~ line 137 ~ AddTransactionComponent ~ addNewTransaction ~ transaction",
        transaction
      );
    });
  }
}
