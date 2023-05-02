import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderCustomScrollTargetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ReorderCustomScrollTargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderCustomScrollTargetComponentRoutingModule {}
