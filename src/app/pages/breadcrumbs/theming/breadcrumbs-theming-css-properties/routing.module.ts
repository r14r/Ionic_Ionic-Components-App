import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsThemingCssPropertiesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsThemingCssPropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsThemingCssPropertiesComponentRoutingModule {}
