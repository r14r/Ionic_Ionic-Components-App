import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastPresentingControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: ToastPresentingControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastPresentingControllerComponentRoutingModule {}
