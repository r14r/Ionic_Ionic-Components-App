import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputLabelPlacementComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: InputLabelPlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputLabelPlacementComponentRoutingModule {}
