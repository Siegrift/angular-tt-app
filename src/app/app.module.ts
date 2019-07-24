import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { JsonPComponent } from './json-p/json-p.component';
import { RouteXssComponent } from './route-xss/route-xss.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    JsonPComponent,
    RouteXssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
