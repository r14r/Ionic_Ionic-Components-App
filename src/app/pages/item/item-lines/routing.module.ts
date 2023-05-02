import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemLinesComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ItemLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemLinesComponentRoutingModule {}
