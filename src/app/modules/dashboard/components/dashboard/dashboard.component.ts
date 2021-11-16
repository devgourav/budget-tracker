import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  template: `
    <div>
      <div class="fixed bottom-8 w-full text-center">
        <button class="bt-buttton" (click)="openAddTransaction()">Add Transaction</button>
      </div>
    </div>
  `,
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openAddTransaction() {
    this.router.navigateByUrl("/add-transaction");
  }
}
