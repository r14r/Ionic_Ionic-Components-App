import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarThemingCssShadowPartsComponentRoutingModule {}
