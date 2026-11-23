import { computed, inject, Service, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { INITIAL_SELECTION } from '../models/dashboard.model';
import { DataService } from './data.service';
import { buildSidebarVm } from '../view-models/sidebar.vm';
import { buildSummaryVm } from '../view-models/summary.vm';
import { buildWashesVm } from '../view-models/washes.vm';
import { buildEfficiencyVm } from '../view-models/efficiency.vm';
import { selectCompany, selectPeriod, selectSite } from './dashboard.updaters';
import { PeriodKind } from '../models/period.model';

@Service()
export class DashboardService {
  readonly #dataService = inject(DataService);

  readonly #selection = signal(INITIAL_SELECTION);
  readonly selection = this.#selection.asReadonly();

  readonly companiesResource = rxResource({
    stream: () => this.#dataService.getCompanies(),
  });

  readonly companies = computed(() => this.companiesResource.value() ?? []);

  readonly selectedCompanyId = computed(
    () => this.#selection().companyId ?? this.companiesResource.value()?.[0]?.id ?? null,
  );

  readonly sitesResource = rxResource({
    params: () => this.selectedCompanyId() ?? undefined,
    stream: (ctx) => this.#dataService.getSites(ctx.params),
  });

  readonly selectedSiteId = computed(
    () => this.#selection().siteId ?? this.sitesResource.value()?.[0]?.id ?? null,
  );

  readonly siteParams = computed(() => {
    const siteId = this.selectedSiteId();
    if (siteId === null) {
      return undefined;
    }
    return { siteId, periodKind: this.#selection().periodKind };
  });

  readonly activitiesResource = rxResource({
    params: this.siteParams,
    stream: (ctx) => this.#dataService.getActivities(ctx.params.siteId, ctx.params.periodKind),
  });

  readonly washesResource = rxResource({
    params: this.siteParams,
    stream: (ctx) => this.#dataService.getWashes(ctx.params.siteId, ctx.params.periodKind),
  });

  readonly sidebarVm = computed(() =>
    buildSidebarVm(this.sitesResource.value() ?? [], this.selectedSiteId()),
  );

  readonly summaryVm = computed(() =>
    buildSummaryVm(this.activitiesResource.value() ?? [], this.washesResource.value() ?? []),
  );

  readonly washesVm = computed(() => buildWashesVm(this.washesResource.value() ?? []));

  readonly efficiencyVm = computed(() => buildEfficiencyVm(this.activitiesResource.value() ?? []));

  readonly isLoading = computed(
    () =>
      this.companiesResource.isLoading() ||
      this.sitesResource.isLoading() ||
      this.activitiesResource.isLoading() ||
      this.washesResource.isLoading(),
  );

  selectCompany(companyId: string) {
    this.#selection.update((state) => selectCompany(state, companyId));
  }

  selectSite(siteId: string) {
    this.#selection.update((state) => selectSite(state, siteId));
  }

  selectPeriod(periodKind: PeriodKind) {
    this.#selection.update((state) => selectPeriod(state, periodKind));
  }
}
