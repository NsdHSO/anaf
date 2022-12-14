import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DashboardPlanningModule} from "./dasboard-planning/dashboard-planning.module";
import {RouterModule} from "@angular/router";
import {AppModuleRouter} from "./app.routing";
import {StoreModule} from "@ngrx/store";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardPlanningModule,
    RouterModule,
    AppModuleRouter,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
