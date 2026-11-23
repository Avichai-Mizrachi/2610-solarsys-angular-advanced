export interface Activity {
  readonly id: string;
  readonly siteId: string;
  readonly day: string;
  readonly energyKwh: number;
  readonly sunlightHours: number;
}
