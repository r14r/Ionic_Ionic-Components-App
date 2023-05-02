import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPushPullComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridPushPullComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridPushPullComponentRoutingModule {}
