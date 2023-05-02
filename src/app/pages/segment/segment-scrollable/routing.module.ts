import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentScrollableComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentScrollableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentScrollableComponentRoutingModule {}
