import { PeriodKind } from '../models/period.model';

export interface DashboardSelection {
  readonly companyId: string | null;
  readonly siteId: string | null;
  readonly periodKind: PeriodKind;
}

export const INITIAL_SELECTION: DashboardSelection = {
  companyId: null,
  siteId: null,
  periodKind: 'all-time',
};
