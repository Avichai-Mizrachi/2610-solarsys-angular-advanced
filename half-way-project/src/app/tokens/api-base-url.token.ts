import {
  EnvironmentProviders,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export function provideApiBaseUrl(url: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: API_BASE_URL,
      useValue: url,
    },
  ]);
}

export function injectApiBaseUrl(): string {
  return inject(API_BASE_URL);
}
