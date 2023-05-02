import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeSlotsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RangeSlotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeSlotsComponentRoutingModule {}
