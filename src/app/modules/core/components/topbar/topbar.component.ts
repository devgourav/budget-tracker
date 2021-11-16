import { Component, OnInit } from "@angular/core";
import { AppStateService } from "../../service/app-state.service";

@Component({
  selector: "app-topbar",
  template: `
    <div class="navbar bg-purple-500 w-screen py-4 flex text-white">
      <img
        src="assets/images/icons/menu.svg"
        alt="Menu Icon"
        class="light-icon"
        (click)="openSidebar()" />
      <p class="text-center text-white m-auto relative right-2">Budget Tracker</p>
    </div>
  `,
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  constructor(private appState: AppStateService) {}

  ngOnInit(): void {}

  openSidebar() {
    this.appState.changeSidebarState("open");
  }
}
