import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideApiBaseUrl } from './tokens/api-base-url.token';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideApiBaseUrl('http://localhost:3000')],
};
