import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'dashboard',
        type: 'manifest',
        exposedModule: './Module',
      }).then((m) => m.DashboardPlanningModule),
  },
  {
    path: 'fleet',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'fleet',
        type: 'manifest',
        exposedModule: './Module',
      }).then((m) => m.FleetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModuleRouter {}
