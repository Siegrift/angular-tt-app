import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {TRUSTED_TYPE_POLICY_NAME} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const POLICY_NAME_PROVIDER = {
  provide: TRUSTED_TYPE_POLICY_NAME, useValue: 'angular-security-policy'};

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic([
  POLICY_NAME_PROVIDER
]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
