import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemClickableComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemClickableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemClickableComponentRoutingModule {}
