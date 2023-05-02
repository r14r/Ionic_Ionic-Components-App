import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridSizeComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridSizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridSizeComponentRoutingModule {}
