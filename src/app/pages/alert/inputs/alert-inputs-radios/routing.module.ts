import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertInputsRadiosComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertInputsRadiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertInputsRadiosComponentRoutingModule {}
