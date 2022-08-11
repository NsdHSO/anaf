import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {AppModuleRouter} from "./app.routing";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppModuleRouter,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
