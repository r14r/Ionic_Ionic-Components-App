import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonTextThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonTextThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletonTextThemingCssPropertiesComponentRoutingModule {}
