import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipSlotsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ChipSlotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipSlotsComponentRoutingModule {}
