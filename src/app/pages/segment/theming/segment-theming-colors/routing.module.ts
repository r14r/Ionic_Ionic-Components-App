import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentThemingColorsComponentRoutingModule {}
