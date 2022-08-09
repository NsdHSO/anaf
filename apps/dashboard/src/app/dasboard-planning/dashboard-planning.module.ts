import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPlanningComponent } from './dashboard-planning.component';
import { DashboardPlanningRoutingModule } from './dashboard-planning-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {StoreModule} from "@ngrx/store";



@NgModule({
  declarations: [DashboardPlanningComponent],
  imports: [
    CommonModule,
    DashboardPlanningRoutingModule,
    DragDropModule,
    StoreModule,

  ],
  exports: [DragDropModule],
})

/** *************************************************************************************************
 * Module Planning
 */
export class DashboardPlanningModule {}
