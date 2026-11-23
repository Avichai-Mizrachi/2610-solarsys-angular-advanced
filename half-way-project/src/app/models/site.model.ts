export type Region = 'north' | 'south' | 'east' | 'west' | 'center';

export interface Site {
  readonly id: string;
  readonly name: string;
  readonly region: Region;
  readonly companyId: string;
}

export const ALL_REGIONS: Region[] = ['north', 'center', 'south', 'east', 'west'];
