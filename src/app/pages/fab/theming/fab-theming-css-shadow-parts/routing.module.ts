import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabThemingCssShadowPartsComponentRoutingModule {}
