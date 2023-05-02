import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsBasicComponentRoutingModule {}
