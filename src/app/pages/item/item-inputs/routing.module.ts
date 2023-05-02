import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemInputsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemInputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemInputsComponentRoutingModule {}
