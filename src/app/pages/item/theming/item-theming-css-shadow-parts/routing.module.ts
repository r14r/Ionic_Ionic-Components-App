import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemThemingCssShadowPartsComponentRoutingModule {}
