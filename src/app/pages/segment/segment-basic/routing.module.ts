import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentBasicComponentRoutingModule {}
