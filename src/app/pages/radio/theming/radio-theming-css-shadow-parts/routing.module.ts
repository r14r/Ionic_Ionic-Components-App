import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioThemingCssShadowPartsComponentRoutingModule {}
