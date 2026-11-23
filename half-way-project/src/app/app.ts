import { Component, inject } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { CompanyHeader } from './views/company-header/company-header';
import { SitesSidebar } from './views/sites-sidebar/sites-sidebar';
import { PeriodBar } from './views/period-bar/period-bar';
import { SummaryView } from './views/summary-view/summary-view';
import { WashesView } from './views/washes-view/washes-view';
import { EfficiencyView } from './views/efficiency-view/efficiency-view';

@Component({
  imports: [CompanyHeader, SitesSidebar, PeriodBar, SummaryView, WashesView, EfficiencyView],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly #dashboardService = inject(DashboardService);
  readonly isLoading = this.#dashboardService.isLoading;
}
