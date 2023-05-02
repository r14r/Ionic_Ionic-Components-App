import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetailArrowsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemDetailArrowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailArrowsComponentRoutingModule {}
