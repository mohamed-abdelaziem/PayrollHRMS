import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { DashboardNavComponent } from "../../../shared/components/dashboard-nav/dashboard-nav.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLinkActive, RouterLinkWithHref, DashboardNavComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
sideBarIsOpen : boolean = false;
whoIsActive : string = 'dashboard';
_router = inject(Router);
teamMangementChildrenShow : boolean = false;



ngOnInit(): void {
  
    initFlowbite();

}






}
