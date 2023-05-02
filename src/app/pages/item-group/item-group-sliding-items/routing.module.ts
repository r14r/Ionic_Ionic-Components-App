import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGroupSlidingItemsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemGroupSlidingItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupSlidingItemsComponentRoutingModule {}
