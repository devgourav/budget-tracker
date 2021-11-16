import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category-list",
  template: `
    <div>
      <div class="fixed bottom-8 w-full text-center">
        <button class="bt-buttton" (click)="openAddCategory()">Add Category</button>
      </div>
    </div>
  `,
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openAddCategory() {
    this.router.navigateByUrl("/add-category");
  }
}
