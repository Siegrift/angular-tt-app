import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from "@angular/core";
import {JsonpModule} from '@angular/http';

import {
  HttpClientJsonpModule,
  HttpClientModule,
} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { JsonPComponent } from './json-p/json-p.component';
import { RouteXssComponent } from './route-xss/route-xss.component';
import { JsonpCommonComponent, SearchService } from './jsonp-common/jsonp-common.component';
import { BrowserDomAdapterComponent } from './browser-dom-adapter/browser-dom-adapter.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    JsonPComponent,
    RouteXssComponent,
    JsonpCommonComponent,
    BrowserDomAdapterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    JsonpModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
