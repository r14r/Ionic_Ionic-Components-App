import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsPlacementComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsPlacementComponentRoutingModule {}
