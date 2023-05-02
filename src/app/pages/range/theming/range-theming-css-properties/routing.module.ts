import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeThemingCssPropertiesComponentRoutingModule {}
