export type PeriodKind =
  'all-time' | 'this-quarter' | 'last-year-quarter' | 'this-month' | 'last-year-month';

export interface Period {
  readonly kind: PeriodKind;
  readonly label: string;
}

export const ALL_PERIODS: Period[] = [
  { kind: 'all-time', label: 'All time' },
  { kind: 'this-quarter', label: 'Last 3 months' },
  { kind: 'last-year-quarter', label: 'Same 3 months last year' },
  { kind: 'this-month', label: 'Last month' },
  { kind: 'last-year-month', label: 'This month last year' },
];
