import { Wash } from '../models/wash.model';

export interface WashesVm {
  readonly days: string[];
}

export function buildWashesVm(washes: Wash[]): WashesVm {
  const days = washes
    .map((w) => w.day)
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 5);

  return { days };
}
