import { Activity } from '../models/activity.model';
import { Wash } from '../models/wash.model';
import { sum } from '../utils/math-utils';

export interface SummaryVm {
  readonly totalEnergy: number;
  readonly totalSunlightHours: number;
  readonly energyPerHour: number;
  readonly washCount: number;
}

export function buildSummaryVm(activities: Activity[], washes: Wash[]): SummaryVm {
  const totalSunlightHours = sum(activities, (a) => a.sunlightHours);
  const totalEnergy = sum(activities, (a) => a.energyKwh);
  const energyPerHour = totalSunlightHours === 0 ? 0 : totalEnergy / totalSunlightHours;
  const washCount = washes.length;

  return {
    totalEnergy,
    totalSunlightHours,
    energyPerHour,
    washCount,
  };
}
