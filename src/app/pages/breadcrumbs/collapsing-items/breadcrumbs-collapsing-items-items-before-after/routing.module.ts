import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsCollapsingItemsItemsBeforeAfterComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsCollapsingItemsItemsBeforeAfterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsCollapsingItemsItemsBeforeAfterComponentRoutingModule {}
