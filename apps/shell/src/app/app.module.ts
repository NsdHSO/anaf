import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppModuleRouter } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducers} from "./store/dashboard-planning.reducer";
import {FrameWholeModule} from "ngx-liburg-frame-side";
import {CONFIG_MAIN} from "./@core/routerConfig";
import {IconCoreModule} from "ngx-liburg-icon";
import {TableMaterialModule} from "ngx-liburg";
import {CustomHeaderComponent} from "./custom-header/custom-header.component";

@NgModule({
  declarations: [AppComponent, CustomHeaderComponent],
  imports: [
    AppModuleRouter,
    BrowserModule,
    FrameWholeModule.forRoot(CONFIG_MAIN),
    IconCoreModule,
    StoreModule,
    StoreModule.forRoot(
      reducers
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    RouterModule,
    TableMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
