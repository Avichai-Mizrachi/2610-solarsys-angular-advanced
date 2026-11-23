import { Component, inject } from '@angular/core';
import { StatCard } from '../../components/stat-card/stat-card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  imports: [StatCard],
  selector: 'app-summary-view',
  styleUrl: './summary-view.css',
  templateUrl: './summary-view.html',
  host: {
    class: 'section',
  },
})
export class SummaryView {
  readonly dashboardService = inject(DashboardService);

  readonly vm = this.dashboardService.summaryVm;
}
