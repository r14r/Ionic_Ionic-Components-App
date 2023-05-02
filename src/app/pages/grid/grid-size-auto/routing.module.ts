import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridSizeAutoComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridSizeAutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridSizeAutoComponentRoutingModule {}
