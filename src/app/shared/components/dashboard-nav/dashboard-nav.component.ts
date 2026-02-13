import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css',
})
export class DashboardNavComponent {
_router = inject(Router);
}
