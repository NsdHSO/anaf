import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./header-bar/header-bar.module').then(m => m.HeaderBarModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModuleRouter {}
