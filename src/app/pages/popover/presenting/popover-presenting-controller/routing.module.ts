import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPresentingControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPresentingControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPresentingControllerComponentRoutingModule {}
