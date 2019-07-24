import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component'
import { MainComponent } from './main/main.component';
import { JsonPComponent } from './json-p/json-p.component';
import { RouteXssComponent } from './route-xss/route-xss.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jsonp', component: JsonPComponent },
  { path: 'xss', component: RouteXssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
