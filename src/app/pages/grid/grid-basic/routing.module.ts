import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridBasicComponentRoutingModule {}
