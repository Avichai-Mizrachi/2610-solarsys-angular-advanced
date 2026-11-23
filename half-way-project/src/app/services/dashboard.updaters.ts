import { DashboardSelection } from '../models/dashboard.model';
import { PeriodKind } from '../models/period.model';

export function selectCompany(state: DashboardSelection, companyId: string): DashboardSelection {
  return {
    ...state,
    companyId,
    siteId: null,
  };
}

export function selectSite(state: DashboardSelection, siteId: string): DashboardSelection {
  return {
    ...state,
    siteId,
  };
}

export function selectPeriod(
  state: DashboardSelection,
  periodKind: PeriodKind,
): DashboardSelection {
  return {
    ...state,
    periodKind,
  };
}
