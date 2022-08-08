import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'dashboard',
        type:"manifest",
        exposedModule: './Module',
      })
        .then((m) => m.DashboardPlanningModule),
  },

  // ,
  // {
  //   path: 'test',
  //   loadChildren: () => import('mfe1/Module').then(m => m.AppModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModuleRouter {}
