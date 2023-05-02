import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentThemingCssPropertiesComponentRoutingModule {}
