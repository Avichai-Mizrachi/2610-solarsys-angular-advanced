import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  imports: [],
  selector: 'app-company-header',
  styleUrl: './company-header.css',
  templateUrl: './company-header.html',
})
export class CompanyHeader {
  readonly dashboardService = inject(DashboardService);

  readonly companies = this.dashboardService.companies;
  readonly selectedCompanyId = this.dashboardService.selectedCompanyId;
}
