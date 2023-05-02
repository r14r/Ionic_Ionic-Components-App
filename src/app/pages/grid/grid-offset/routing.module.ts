import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridOffsetComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: GridOffsetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridOffsetComponentRoutingModule {}
