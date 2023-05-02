import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsThemingColorsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsThemingColorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsThemingColorsComponentRoutingModule {}
