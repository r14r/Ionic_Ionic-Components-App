import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderBasicComponentRoutingModule {}
