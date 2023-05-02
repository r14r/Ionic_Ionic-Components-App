import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeLabelsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeLabelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeLabelsComponentRoutingModule {}
