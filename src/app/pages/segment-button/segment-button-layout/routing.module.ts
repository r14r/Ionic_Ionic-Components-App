import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentButtonLayoutComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentButtonLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentButtonLayoutComponentRoutingModule {}
