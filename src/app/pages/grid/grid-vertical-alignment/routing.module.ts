import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridVerticalAlignmentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridVerticalAlignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridVerticalAlignmentComponentRoutingModule {}
