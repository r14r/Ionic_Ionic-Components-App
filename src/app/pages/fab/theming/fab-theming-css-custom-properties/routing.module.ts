import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabThemingCssCustomPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: FabThemingCssCustomPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabThemingCssCustomPropertiesComponentRoutingModule {}
