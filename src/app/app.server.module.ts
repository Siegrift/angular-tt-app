import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import {TRUSTED_TYPE_POLICY_NAME} from '@angular/platform-browser';

const POLICY_NAME_PROVIDER = {
  provide: TRUSTED_TYPE_POLICY_NAME, useValue: 'angular-security-policy'};

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  providers: [POLICY_NAME_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
