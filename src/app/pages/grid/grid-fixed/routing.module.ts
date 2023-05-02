import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridFixedComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridFixedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridFixedComponentRoutingModule {}
