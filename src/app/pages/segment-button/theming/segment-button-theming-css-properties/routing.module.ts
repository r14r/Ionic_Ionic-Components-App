import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentButtonThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SegmentButtonThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentButtonThemingCssPropertiesComponentRoutingModule {}
