import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { injectApiBaseUrl } from '../tokens/api-base-url.token';
import { PeriodKind } from '../models/period.model';
import { Wash } from '../models/wash.model';
import { Activity } from '../models/activity.model';
import { Site } from '../models/site.model';
import { Company } from '../models/company.model';

@Service()
export class DataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = injectApiBaseUrl();

  getCompanies() {
    const url = `${this.#baseUrl}/companies`;
    const res = this.#http.get<Company[]>(url);
    return res;
  }

  getSites(companyId: string) {
    const url = `${this.#baseUrl}/sites?companyId=${companyId}`;
    const res = this.#http.get<Site[]>(url);
    return res;
  }

  getActivities(siteId: string, period: PeriodKind) {
    const url = `${this.#baseUrl}/activities?siteId=${siteId}${this.#periodQuery(period)}`;
    const res = this.#http.get<Activity[]>(url);
    return res;
  }

  getWashes(siteId: string, period: PeriodKind) {
    const url = `${this.#baseUrl}/washes?siteId=${siteId}${this.#periodQuery(period)}`;
    const res = this.#http.get<Wash[]>(url);
    return res;
  }

  #periodQuery(period: PeriodKind) {
    return period === 'all-time' ? '' : `&period=${period}`;
  }
}
