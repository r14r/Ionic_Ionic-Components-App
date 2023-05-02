import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDividerBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemDividerBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDividerBasicComponentRoutingModule {}
