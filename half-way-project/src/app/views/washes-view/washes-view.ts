import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  imports: [DatePipe],
  selector: 'app-washes-view',
  styleUrl: './washes-view.css',
  templateUrl: './washes-view.html',
  host: {
    class: 'section',
  },
})
export class WashesView {
  readonly dashboardService = inject(DashboardService);

  readonly vm = this.dashboardService.washesVm;
}
