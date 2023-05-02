import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertButtonsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertButtonsComponentRoutingModule {}
