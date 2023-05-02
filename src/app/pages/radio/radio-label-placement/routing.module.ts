import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioLabelPlacementComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: RadioLabelPlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioLabelPlacementComponentRoutingModule {}
