import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SpinnerThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinnerThemingCssPropertiesComponentRoutingModule {}
