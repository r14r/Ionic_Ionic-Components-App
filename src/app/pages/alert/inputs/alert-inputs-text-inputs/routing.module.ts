import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertInputsTextInputsComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: AlertInputsTextInputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertInputsTextInputsComponentRoutingModule {}
