import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {FleetComponent} from "./fleet.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
    children: [
      { path: '',
        component: FleetComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class FleetModuleRouter {}
