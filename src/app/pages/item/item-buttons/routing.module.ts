import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemButtonsComponentRoutingModule {}
