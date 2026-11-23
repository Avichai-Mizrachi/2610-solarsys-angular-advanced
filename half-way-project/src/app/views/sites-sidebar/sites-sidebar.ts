import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { SiteItem } from './site-item/site-item';

@Component({
  imports: [SiteItem],
  selector: 'app-sites-sidebar',
  styleUrl: './sites-sidebar.css',
  templateUrl: './sites-sidebar.html',
})
export class SitesSidebar {
  readonly dashboardService = inject(DashboardService);

  readonly vm = this.dashboardService.sidebarVm;
}
