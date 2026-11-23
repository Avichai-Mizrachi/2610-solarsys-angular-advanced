import { Component, computed, inject } from '@angular/core';
import { ALL_PERIODS } from '../../models/period.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  imports: [],
  selector: 'app-period-bar',
  styleUrl: './period-bar.css',
  templateUrl: './period-bar.html',
})
export class PeriodBar {
  readonly dashboardService = inject(DashboardService);

  readonly periods = ALL_PERIODS;
  readonly selectedKind = computed(() => this.dashboardService.selection().periodKind);
}
