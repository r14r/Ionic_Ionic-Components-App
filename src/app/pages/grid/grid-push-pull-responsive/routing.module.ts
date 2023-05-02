import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPushPullResponsiveComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridPushPullResponsiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridPushPullResponsiveComponentRoutingModule {}
