import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSlidingIconsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemSlidingIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSlidingIconsComponentRoutingModule {}
