import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [
  {
    path: 'dasd',
    component: HeaderComponent
  },

];
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HeaderBarModule {}
