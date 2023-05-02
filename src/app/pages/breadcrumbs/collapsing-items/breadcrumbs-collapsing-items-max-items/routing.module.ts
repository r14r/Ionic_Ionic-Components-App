import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsCollapsingItemsMaxItemsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsCollapsingItemsMaxItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsCollapsingItemsMaxItemsComponentRoutingModule {}
