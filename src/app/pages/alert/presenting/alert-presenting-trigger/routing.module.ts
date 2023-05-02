import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPresentingTriggerComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertPresentingTriggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPresentingTriggerComponentRoutingModule {}
