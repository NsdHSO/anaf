import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetComponent } from './fleet.component';
import {FleetModuleRouter} from "./fleet.routing";

@NgModule({
  declarations: [FleetComponent],
  imports: [CommonModule, FleetModuleRouter],
})
export class FleetModule {}
