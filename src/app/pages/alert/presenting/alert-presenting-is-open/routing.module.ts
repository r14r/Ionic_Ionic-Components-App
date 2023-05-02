import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPresentingIsOpenComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertPresentingIsOpenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPresentingIsOpenComponentRoutingModule {}
