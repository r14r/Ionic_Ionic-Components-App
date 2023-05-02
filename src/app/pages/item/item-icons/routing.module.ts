import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemIconsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemIconsComponentRoutingModule {}
