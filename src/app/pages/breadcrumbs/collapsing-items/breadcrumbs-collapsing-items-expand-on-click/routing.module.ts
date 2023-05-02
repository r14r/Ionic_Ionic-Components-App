import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsCollapsingItemsExpandOnClickComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsCollapsingItemsExpandOnClickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsCollapsingItemsExpandOnClickComponentRoutingModule {}
