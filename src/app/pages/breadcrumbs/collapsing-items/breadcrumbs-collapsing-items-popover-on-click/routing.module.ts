import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsCollapsingItemsPopoverOnClickComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsCollapsingItemsPopoverOnClickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsCollapsingItemsPopoverOnClickComponentRoutingModule {}
