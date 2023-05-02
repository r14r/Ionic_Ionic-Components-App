import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeSnappingTicksComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeSnappingTicksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeSnappingTicksComponentRoutingModule {}
