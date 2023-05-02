import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSlidingExpandableComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemSlidingExpandableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSlidingExpandableComponentRoutingModule {}
