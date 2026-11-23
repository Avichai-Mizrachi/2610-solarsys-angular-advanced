import { Activity } from '../models/activity.model';

export interface EfficiencyRowVm {
  readonly day: string;
  readonly sunlightHours: number;
  readonly energyKwh: number;
  readonly efficiency: number;
}

export interface EfficiencyVm {
  readonly rows: EfficiencyRowVm[];
}

export function buildEfficiencyVm(activities: Activity[]): EfficiencyVm {
  const rows = activities
    .filter((a) => a.sunlightHours > 0)
    .map((a) => ({
      day: a.day,
      sunlightHours: a.sunlightHours,
      energyKwh: a.energyKwh,
      efficiency: a.energyKwh / a.sunlightHours,
    }))
    .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, 5);

  return { rows };
}
