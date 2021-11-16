import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { TransactionType } from "src/app/shared/models/transaction.model";
import { Category } from "src/app/shared/models/category.model";
import { LocaldbService } from "../../core/service/localdb.service";

@Component({
  selector: "app-category-add",
  template: `
    <div>
      <div class="flex items-center">
        <img
          src="assets/images/icons/arrow-left.svg"
          alt="Close Icon"
          class="p-2 w-10 h-10 hover:cursor-pointer"
          (click)="goBack()" />

        <p class="font-bold text-sm text-gray-500">Return to Category</p>
      </div>

      <h3 class="font-bold text-center my-2 m-auto relative right-4">Add a new Category</h3>

      <div class="px-6">
        <form [formGroup]="categoryForm">
          <div class="mt-4">
            <app-text-toggle
              formControlName="type"
              (messageEvent)="receiveType($event)"></app-text-toggle>
          </div>

          <div class="mt-4">
            <p class="my-2">Give it a name</p>

            <input type="string" placeholder="New Category Name" formControlName="name" class="" />
          </div>

          <div class="mt-4">
            <p class="my-2">Give it a color</p>

            <input
              type="color"
              placeholder="Select Color"
              formControlName="tagColor"
              class="h-10" />
          </div>
        </form>

        <div class="w-full text-center mt-8">
          <button class="bt-buttton w-36" (click)="addNewCategory()">Save</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./category-add.component.scss"],
})
export class CategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  currentDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private localdbService: LocaldbService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ["", Validators.required],
      type: [TransactionType.Expense],
      tagColor: ["", Validators.required],
    });
  }

  goBack() {
    this.location.back();
  }

  receiveType($event: any) {}

  addNewCategory() {
    let category: Category = {
      type: this.categoryForm.get("type")?.value,
      name: this.categoryForm.get("name")?.value,
      subCategories: [],
      tagColor: this.categoryForm.get("tagColor")?.value,
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    this.localdbService.set("categories", category);
    console.log(
      "🚀 ~ file: add-transaction.component.ts ~ line 137 ~ AddTransactionComponent ~ addNewTransaction ~ transaction",
      category
    );
  }
}
