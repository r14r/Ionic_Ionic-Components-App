import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxLabelPlacementComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxLabelPlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxLabelPlacementComponentRoutingModule {}
