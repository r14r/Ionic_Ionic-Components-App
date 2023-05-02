import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGroupBasicComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemGroupBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupBasicComponentRoutingModule {}
