import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsIconsIconsOnItemsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsIconsIconsOnItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsIconsIconsOnItemsComponentRoutingModule {}
