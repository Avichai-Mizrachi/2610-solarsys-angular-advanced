import { ALL_REGIONS, Region, Site } from '../models/site.model';

export interface SidebarSiteVm {
  readonly id: string;
  readonly name: string;
  readonly selected: boolean;
}

export interface SidebarGroupVm {
  readonly region: Region;
  readonly sites: SidebarSiteVm[];
}

export interface SidebarVm {
  readonly groups: SidebarGroupVm[];
}

export function buildSidebarVm(sites: Site[], selectedSiteId: string | null): SidebarVm {
  const groups = ALL_REGIONS.map((region) => buildGroupVm(region)).filter(
    (group) => group.sites.length > 0,
  );

  return { groups };

  function buildGroupVm(region: Region): SidebarGroupVm {
    return {
      region,
      sites: sites.filter((s) => s.region === region).map(buildSiteVm),
    };
  }

  function buildSiteVm(site: Site): SidebarSiteVm {
    return {
      id: site.id,
      name: site.name,
      selected: site.id === selectedSiteId,
    };
  }
}
