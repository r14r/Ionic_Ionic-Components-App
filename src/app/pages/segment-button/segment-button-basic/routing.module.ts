import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentButtonBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentButtonBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentButtonBasicComponentRoutingModule {}
