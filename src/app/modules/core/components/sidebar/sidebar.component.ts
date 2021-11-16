import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AppStateService } from "../../service/app-state.service";

@Component({
  selector: "app-sidebar",
  template: `
    <div class="w-1/2 h-full bg-purple-200 fixed z-50 top-0" *ngIf="isShowSidebar">
      <img
        src="assets/images/icons/close.svg"
        alt="Close Icon"
        class="p-2 w-12 h-12 hover:cursor-pointer"
        (click)="isShowSidebar = false" />
      <ul class="mt-16 px-3 font-bold">
        <li
          class="py-2 hover:text-purple-600 hover:cursor-pointer"
          (click)="navigateTo('/dashboard')">
          Dashboard
        </li>

        <li
          class="py-2 hover:text-purple-600 hover:cursor-pointer"
          (click)="navigateTo('/category')">
          Category
        </li>
        <li class="py-2 hover:text-purple-600 hover:cursor-pointer">Accounts</li>
        <li class="py-2 hover:text-purple-600 hover:cursor-pointer">Settings</li>
      </ul>
    </div>
  `,
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  private subs: Subscription[] = [];
  isShowSidebar: boolean = false;
  constructor(private appState: AppStateService, private router: Router) {}

  ngOnInit(): void {
    this.checkSidebarState();
  }

  checkSidebarState() {
    const sidebarState = this.appState.getSidebarState().subscribe(res => {
      console.log(
        "🚀 ~ file: sidebar.component.ts ~ line 48 ~ SidebarComponent ~ sidebarState ~ res",
        res
      );
      this.isShowSidebar = res == "close" ? false : true;
    });

    this.subs.push(sidebarState);
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path).then(() => {
      this.isShowSidebar = false;
    });
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
