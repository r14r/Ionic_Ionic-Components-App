import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSlidingBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemSlidingBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSlidingBasicComponentRoutingModule {}
