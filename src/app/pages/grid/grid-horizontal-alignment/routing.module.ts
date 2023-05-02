import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridHorizontalAlignmentComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridHorizontalAlignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridHorizontalAlignmentComponentRoutingModule {}
