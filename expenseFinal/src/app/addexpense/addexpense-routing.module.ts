import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddexpensePage } from './addexpense.page';

const routes: Routes = [
  {
    path: '',
    component: AddexpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddexpensePageRoutingModule {}
