import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  imports: [DatePipe, DecimalPipe],
  selector: 'app-efficiency-view',
  styleUrl: './efficiency-view.css',
  templateUrl: './efficiency-view.html',
  host: {
    class: 'section',
  },
})
export class EfficiencyView {
  readonly dashboardService = inject(DashboardService);

  readonly vm = this.dashboardService.efficiencyVm;
}
