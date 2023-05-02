import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonTextBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonTextBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletonTextBasicComponentRoutingModule {}
