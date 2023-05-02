import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPresentingControllerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertPresentingControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPresentingControllerComponentRoutingModule {}
