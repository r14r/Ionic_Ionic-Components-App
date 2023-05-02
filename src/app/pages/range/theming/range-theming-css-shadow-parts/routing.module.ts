import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeThemingCssShadowPartsComponentRoutingModule {}
