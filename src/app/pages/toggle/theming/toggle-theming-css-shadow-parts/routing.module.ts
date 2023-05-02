import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToggleThemingCssShadowPartsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToggleThemingCssShadowPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleThemingCssShadowPartsComponentRoutingModule {}
