import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridOffsetResponsiveComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridOffsetResponsiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridOffsetResponsiveComponentRoutingModule {}
