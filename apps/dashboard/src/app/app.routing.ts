import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dasboard-planning/dashboard-planning.module').then(m => m.DashboardPlanningModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModuleRouter {}
