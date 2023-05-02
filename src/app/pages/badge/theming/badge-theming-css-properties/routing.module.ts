import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BadgeThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeThemingCssPropertiesComponentRoutingModule {}
