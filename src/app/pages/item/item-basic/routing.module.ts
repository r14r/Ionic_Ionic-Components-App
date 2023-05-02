import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemBasicComponentRoutingModule {}
