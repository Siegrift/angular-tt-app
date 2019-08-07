import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { MainComponent } from './main/main.component';
import { JsonPComponent } from './json-p/json-p.component';
import { RouteXssComponent } from './route-xss/route-xss.component';
import {JsonpCommonComponent} from './jsonp-common/jsonp-common.component';
import {BrowserDomAdapterComponent} from './browser-dom-adapter/browser-dom-adapter.component';
import { I18nComponent } from './i18n/i18n.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jsonp', component: JsonPComponent },
  { path: 'jsonp-common', component: JsonpCommonComponent },
  { path: 'browser-dom-adapter', component: BrowserDomAdapterComponent },
  { path: 'i18n', component: I18nComponent },
  { path: '**', component: RouteXssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
